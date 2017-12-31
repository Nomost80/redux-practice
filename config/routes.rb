Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, except: [:index, :new, :show, :edit, :update, :destroy]
    post 'user_token' => 'user_token#create'
    resources :rides, except: [:new, :show, :edit]
  end
end
