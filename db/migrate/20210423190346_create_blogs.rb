class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :flair
      t.string :name
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
