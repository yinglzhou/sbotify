json.playlist do 
    json.extract! @playlist, :id, :name, :owner_id
    # json.playlistCover
end

# if @playlist_tracks
#     json.playlist_tracks do
#         @playlist_tracks.each do |track|
#             json.set! track.id do
#                 json.extract! track, :id, 
# 
# 
#             end
#         end
#     end
# end