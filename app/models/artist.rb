# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, presence: true

    has_one_attached :artist_photo

    has_many :albums,
    dependent: :destroy

    has_many :songs,
    dependent: :destroy
end
