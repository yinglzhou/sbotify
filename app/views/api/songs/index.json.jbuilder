
json.songs do
    @songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id, :artist_id
        end
    end
end