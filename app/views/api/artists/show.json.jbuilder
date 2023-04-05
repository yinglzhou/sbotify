json.artist do 
    json.set! @artist.id do 
        json.extract! @artist, :id, :name
    end
end

json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :name
        end
    end
end
