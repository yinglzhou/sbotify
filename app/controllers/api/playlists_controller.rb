class Api::PlaylistsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :show]

    def index
        # @playlists = current_user.playlists.all
        @playlists = Playlist.all
        render :index
    end


    def create
        # @playlist = current_user.playlists.new(playlist_params)
        @playlist = Playlist.new(playlist_params)
        if @playlist.save 
            render :show 
        else
            render json: { errors: @playlist.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if @playlist.update(playlist_params)
            render json: @playlist
        else 
            render json: { errors: @playlist.errors.full_messages }, status: :unprocessable_entity
        end
        render :update
    end


    def show
        # @playlist = current_user.playlists.find(params[:id])
        @playlist = Playlist.find(params[:id])
        @playlist_tracks = @playlist.playlist_tracks.includes(song: :album)
        render :show
    end

    def destroy
        # @playlist = current_user.playlists.find(params[:id])
        @playlist = Playlist.find(params[:id])

        unless @playlist
            render json: { message: 'Unauthorized' }, status: :unauthorized
            return
        end
        @playlist.destroy
        render :show
    end

    private 
    def playlist_params
        params.require(:playlist).permit(
            :name,
            :owner_id
            # :optional_description
        )
    end

end