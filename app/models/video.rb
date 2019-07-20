class Video < ApplicationRecord
  belongs_to :user, dependent: :destroy 


  def self.user_info(user_id, id)
    find_by_sql([
      "SELECT 
        v.id AS video_id,
        user_id AS video_user_id,
        u.id AS user_id,
        u.name AS user_name,
        u.image AS user_image
      FROM videos AS v
      JOIN users AS u ON v.user_id = u.id
      WHERE (v.user_id = ? AND v.id = ?)", user_id, id
    ])
  end
end
