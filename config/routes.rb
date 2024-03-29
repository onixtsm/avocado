Rails.application.routes.draw do
  devise_for :users, skip: :registrations, controllers: { sessions: 'users/sessions' }
  root 'home#index'
  get 'home/about'

  resources :blogs, path: 'blog'
  get 'games', to: 'games#index'
  get 'games/catcher'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
