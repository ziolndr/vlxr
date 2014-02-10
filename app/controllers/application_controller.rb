require 'mailchimp'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :setup_mcapi

  def setup_mcapi
  	@mc = Mailchimp::API.new('b4aa57cddc71bfdaf0a40e2a95b4d60e-us3')
  	@list_id = '2d6645b3a5'
end
end