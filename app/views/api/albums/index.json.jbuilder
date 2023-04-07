
json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :name, :artist_id
        end
    end
end

json.artists do 
    @artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :name
        end
    end
end