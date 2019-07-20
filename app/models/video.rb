class Video < ApplicationRecord
  belongs_to :user, dependent: :destroy 
end
