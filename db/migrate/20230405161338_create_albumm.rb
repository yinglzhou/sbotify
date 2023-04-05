class CreateAlbumm < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :name, null: false, index: true
      t.references :artist, foreign_key: true, null: false

      t.timestamps
    end
  end
end
