class BlogPost < ApplicationRecord
    has_rich_text :content
    has_one_attached :photo
    validates :title, presence:true
    validates :content, presence:true
    belongs_to :user
end
