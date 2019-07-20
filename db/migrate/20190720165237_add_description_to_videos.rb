class AddDescriptionToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :description, :text
  end
end
