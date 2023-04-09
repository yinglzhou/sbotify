json.album do 
    json.extract! @album, :id, :name, :artist_id
end

if @songs 
    json.songs do
        @songs.each do |song|
            json.set! song.id do 
                json.extract! song, :id, :title, :duration, :album_id, :artist_id
            end
        end
    end
end