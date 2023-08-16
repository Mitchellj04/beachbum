Rails.application.routes.draw do
  resources :genders
  resources :admins
  resources :orders
  resources :carts
  resources :products
  resources :categories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/checkout', to: 'checkout#create'
  post '/login', to: 'sessions#create'
  post '/login/admin', to: 'sessions#admin'
  get '/products-all', to: 'products#index'
  get '/signedin', to: 'admins#login'
  # Defines the root path route ("/")

  root "application#index"

  get "*path", to: "application#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/admin', to: "application#admin", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/admin', to: "application#admin"
end
