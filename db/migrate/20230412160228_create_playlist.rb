class CreatePlaylist < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :name, null:false, index: true
      t.references :owner, foreign_key: {to_table: :users}, null: false

      t.timestamps
    end

    create_table :playlist_tracks do |t|
      t.references :playlist, foreign_key: {to_table: :playlists}, null: false
      t.references :song, foreign_key: {to_table: :songs}, null: false

      t.timestamps
    end

  end
end
