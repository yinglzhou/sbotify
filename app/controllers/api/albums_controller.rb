class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all 
        @artists = Artist.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end
end