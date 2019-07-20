Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    resources :videos do
      resources :comments
    end
    resources :comments do 
      get "user-info/:user_id/:id", to: "comments#userinfo"
    end 
  end 
end
