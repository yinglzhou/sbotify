json.playlist do 
    json.extract! @playlist, :id, :name, :owner_id
end

if @playlist_tracks
    json.playlist_tracks do
        @playlist_tracks.each do |track|
            song = track.song
            album = song.album
            json.set! song.id do 
                json.extract! song, :id, :title, :duration, :album_id, :artist_id
                json.artist song.artist.name
                json.mp3 song.mp3.attached? ? song.mp3.url : nil
                json.albumCover album.album_cover.attached? ? album.album_cover.url : nil
            end
        end
    end
end