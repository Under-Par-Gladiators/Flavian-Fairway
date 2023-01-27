Rails.application.routes.draw do
  resources :metrics
  get 'home/index'
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/random' => 'metrics#showrandom'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  # get '/random' => 'metrics#showrandom'
end
