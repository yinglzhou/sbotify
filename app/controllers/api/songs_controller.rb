class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end

    def show
        @song = Song.find(params[:id])
        render :show
    end


    def search 
        query = params[:q].downcase
        @songs = Song.where('lower(title) LIKE ?', "%#{query}%")
        # .or(Song.joins(:artist).where('lower(artists.name) LIKE ?', "%#{query}%"))
        # .or(Song.joins(:album).where('lower(albums.title) LIKE ?', "%#{query}%"))
        .includes(:album, :artist)
        #:q is name of query string (anything after ? in url)
        
        render :search
    end


end
