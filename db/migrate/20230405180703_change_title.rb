class ChangeTitle < ActiveRecord::Migration[7.0]
  def change
    change_column_null :songs, :title, true
  end
end
