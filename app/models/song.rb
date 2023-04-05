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

    belongs_to :album,
    dependent: :destroy

    belongs_to :artist, 
    dependent: :destroy

end
