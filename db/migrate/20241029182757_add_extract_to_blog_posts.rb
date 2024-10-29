class AddExtractToBlogPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :blog_posts, :extract, :text
  end
end
