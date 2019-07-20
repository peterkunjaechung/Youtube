class RemoveDescriptionLFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :descriptionL, :text
  end
end
