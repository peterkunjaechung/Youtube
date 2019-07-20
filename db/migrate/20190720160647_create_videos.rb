class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :duration
      t.string :genre
      t.text :descriptionL
      t.string :trailer
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
