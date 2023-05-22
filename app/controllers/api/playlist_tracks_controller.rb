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
        @playlist_track = playlist.playlist_tracks.build(playlist_id: params[:playlist_id], song_id: params[:song_id])
        if @playlist_track.save
            render json: @playlist_track, status: :created
        else
            render json: { errors: @playlist_track.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def playlist_track_params
        params.require(:playlist_track).permit(:playlist_id, :song_id)
    end
end