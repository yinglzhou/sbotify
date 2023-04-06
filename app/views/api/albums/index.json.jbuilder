
# json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :name, :artist_id
        end

    end
# end