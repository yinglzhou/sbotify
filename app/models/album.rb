# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
    validates :name, presence: true
    has_one_attached :album_cover

    belongs_to :artist

    has_many :songs,
    dependent: :destroy 
end
