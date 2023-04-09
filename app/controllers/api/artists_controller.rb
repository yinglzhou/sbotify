class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
        @albums = @artist.albums.includes(:artist)
        # :artist is an association from the album model
        render :show
    end

end