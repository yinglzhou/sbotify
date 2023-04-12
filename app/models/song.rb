# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  duration   :string           not null
#  album_id   :bigint           not null
#  artist_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#
class Song < ApplicationRecord
    validates :title, presence: true

    validates :duration,
        presence: true,
        format: { with: /\A\d:\d\d$\z/ }
                        # has to be like "##:##"

    has_one_attached :mp3
    belongs_to :album
    belongs_to :artist

    has_many :playlist_tracks,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistTrack,
    dependent: :destroy

end
