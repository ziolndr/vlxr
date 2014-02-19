class SubscriberMailer < ActionMailer::Base
  def vlxrgreeting
    mail :subject => "Welcome to vlxr!",
         :to      => "recipient@example.com",
         :from    => "hi@vlxr.co"
  end
end