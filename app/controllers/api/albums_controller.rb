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

    def songs
        @album = Album.find(params[:id])
        @songs = @album.songs.includes(:album)
        render :show
    end
end