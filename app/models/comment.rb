class Comment < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :video, dependent: :destroy 

  def self.user_info(user_id, id)
    find_by_sql([
      "SELECT 
        c.id AS comment_id,
        user_id AS comment_user_id,
        u.id AS user_id,
        u.name AS user_name,
        u.image AS user_image
      FROM comments AS c 
      JOIN users AS u ON c.user_id = u.id
      WHERE (c.user_id = ? AND c.id = ?)", user_id, id
    ])
  end
end
