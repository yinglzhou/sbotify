Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    get 'songs/search', to: "songs#search"
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :songs, only: [:show, :index]
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      resources :playlist_tracks, only: [:destroy]
    end
    # index - all the playlist names only
    # show - 




    # resources :playlist_tracks, only: [:index]
    # index is going to get all the songs in the playlist 
    # query string narrow down all playlist songs with playlist id 
    get 'albums/:id/songs', to: 'albums#songs', as: 'album_songs'
    get 'playlists/:id/tracks', to: 'playlists#tracks', as: 'playlist_tracks'
  end
  
  get '*path', to: "static_pages#frontend_index"
end
