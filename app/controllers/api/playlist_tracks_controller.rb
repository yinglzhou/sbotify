class Api::PlaylistTracksController < ApplicationController 
    def destroy
        playlist_track = PlaylistTrack.find_by(playlist_id: params[:playlist_id])
        unless playlist_track
            render json: { message: 'Unauthorized' }, status: :unauthorized
            return
        end

        playlist_track.destroy
        render json: { message: 'Song removed from playlist' }
    end

    def create 
        playlist = Playlist.find(params[:playlist_id])
        @playlist_track = PlaylistTrack.new(playlist_track_params)
        if @playlist_track.save
            render json: playlist_track, status: :created
        else
            render json: { errors: @playlist.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def playlist_track_params
        params.require(:playlist_track).permit(:track_id, :song_id)
    end
end