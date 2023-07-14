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
  post '/admin', to: 'sessions#admin'
  get '/products-all', to: 'products#index'
  get '/admin', to: 'admins#login'
  # Defines the root path route ("/")
  # root "articles#index"
end
