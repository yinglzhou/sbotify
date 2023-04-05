json.artist do 
    json.set! @artist.id do 
        json.extract! @artist, :id, :name
    end
end
