# should it be nested under the 'album' term or just id
# same for artist

json.song do 
    # json.set! @song.id do
        json.extract! @song, :id, :title, :album_id, :artist_id
    # end
end