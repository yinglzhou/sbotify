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


end