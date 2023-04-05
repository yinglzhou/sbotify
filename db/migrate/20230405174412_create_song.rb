class CreateSong < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :duration, null: false
      t.string :title
      
      t.references :album, foreign_key: true, null: false
      t.references :artist, foreign_key: true, null: false

      t.timestamps
    end
  end
end
