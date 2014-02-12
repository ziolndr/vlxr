class NotificationMailer < ActionMailer::Base
	default :from -> "hivlxr@vlxr.co"

	def subscription_notification(subscriber)

		@subscriber = subscriber

		mail(:to => subscriber.email, 
			:subject => "Hi, thanks for signing up.", 
	end
end