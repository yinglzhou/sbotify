json.search do
    @songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id, :artist_id
            json.mp3 song.mp3.attached? ? song.mp3.url : nil
        end
    end
end