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
        @songs = Song.where('lower(title) LIKE ?', "%#{params[:q]}%").includes(:album, :artist)
        #:q is name of query string (anything after ? in url)
        
        render :search
    end


end
