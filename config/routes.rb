Rails.application.routes.draw do
  resources :orders
  resources :carts
  resources :products
  resources :categories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  # Defines the root path route ("/")
  # root "articles#index"
end
