class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter  :verify_authenticity_token

  def take
  	type = params[:value]
  	begin
      symb = /[a-zA-Z]/
      calc = eval(type)
      raise render json: {some: "Incorrect input"} if type=~symb
  		render json: {some: calc }
    rescue ZeroDivisionError
      render json:{some: "Infinity"}
    rescue Exception => err
  		render json: {some: "Invalid input"}
  	end
  end
end
