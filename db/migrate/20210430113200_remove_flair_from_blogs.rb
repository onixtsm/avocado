class RemoveFlairFromBlogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :blogs, :flair, :string
  end
end
