Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :songs, only: [:show, :index]

    get 'albums/:id/songs', to: 'albums#songs', as: 'album_songs'
  end
  
  get '*path', to: "static_pages#frontend_index"
end
