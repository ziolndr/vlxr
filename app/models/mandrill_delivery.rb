require 'mandrill'

class MandrillDelivery
	attr_accessor :message

	def initialize(mail)
	end

	def deliver!(mail)
		build_meta_mandrill(mail)
		send_mandrill(mail)
	end

	def build_meta_mandrill(mail)

		@message = {
			:from_name=> "VLXR",
			:from_email=>"hivlxr@vlxr.com",
			:subject=> "#{mail['subject']}",
			:to=>[
				{
					:email=>"#{mail['to']}",
					:name=>"#{mail['name']}"
					}
					],
			:auto_text => true,
			:global_merge_vars => [
									{
										:name => "VLXR",
										:content => "VLXR"
									}
									]
		}

		true
	end

	def send_mandrill(mail)
		m = Mandrill::API.new

		sending = m.messages.send_template 'Sign Up Confirmation',
											[
											 {
											 	:name => 'main',
											 	:content"#{mail.body}"
											 },
											 {
											 	:name => 'unsub',
											 	:content => "#{mail['unsub_link']}"
											 }
											],
											message = @message)				
		Rails.logger.info sending
	end

end




