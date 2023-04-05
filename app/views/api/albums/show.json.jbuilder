# should it be nested under the 'album' term or just id
# same for artist

json.album do 
    json.set! @album.id do
        json.extract! @album, :id, :name, :artist_id
    end
end