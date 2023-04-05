class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
        # using albums association here
        @albums = @artist.albums.includes(:artist)
        render :show
    end

end