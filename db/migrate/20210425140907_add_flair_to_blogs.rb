class AddFlairToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :flair, :string
  end
end
