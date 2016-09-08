class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter  :verify_authenticity_token

  def take
  	calc = params[:value]
  	begin
    	calc = eval(calc)
  		render json: {some: calc }
  	rescue Exception => err
  		render json: {some: err.to_s}
  	end
  end
end
