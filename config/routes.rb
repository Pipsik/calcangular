Rails.application.routes.draw do
  post '/return' => 'application#take'
end
