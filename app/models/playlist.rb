# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord
    validates :name, presence: true

    has_one_attached :playlist_cover

    belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    has_many :playlist_tracks,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistTrack,
    dependent: :destroy
end
