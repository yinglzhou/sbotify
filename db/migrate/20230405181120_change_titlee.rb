class ChangeTitlee < ActiveRecord::Migration[7.0]
  def change
    remove_column :songs, :title
    add_column :songs, :title, :string, null: false
  end
end
