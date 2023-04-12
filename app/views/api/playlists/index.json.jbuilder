json.playlists do 
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.extract! playlist, :id, :name, :owner_id
        end
    end
end
