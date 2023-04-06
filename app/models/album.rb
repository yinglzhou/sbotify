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

    belongs_to :artist
    # primary_key :id,
    # foreign_key :artist_id,
    # dependent: :destroy

    has_many :songs
    # dependent: :destroy
end
