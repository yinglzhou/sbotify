class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all 
        # @albums.each do |album|
        #     album['artist'] = album.artist.name
        # end
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end
end