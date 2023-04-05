class CreateAlbum < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|

      t.string :name, null: false, index: true
      t.timestamps
    end
  end
end
