json.album do 
    json.extract! @album, :id, :name, :artist_id
    json.albumCover @album.album_cover.attached? ? @album.album_cover.url : nil
end


if @songs 
    json.songs do
        @songs.each do |song|
            json.set! song.id do 
                json.extract! song, :id, :title, :duration, :album_id, :artist_id
                if @artist
                    json.extract! @artist, :name
                end
                json.mp3 song.mp3.attached? ? song.mp3.url : nil
                json.albumCover @album.album_cover.attached? ? @album.album_cover.url : nil
            end
        end
    end
    if @artist
        json.artist do
            json.extract! @artist, :name
        end
    end
end