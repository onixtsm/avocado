Rails.application.routes.draw do
  root 'home#index'
  get 'home/about'

  get 'games', to: 'games#index'
  get 'games/catcher'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
