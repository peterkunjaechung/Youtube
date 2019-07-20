class AddLikeToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :like, :integer
    add_column :videos, :dislike, :integer
  end
end
