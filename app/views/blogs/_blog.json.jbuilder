json.extract! blog, :id, :name, :title, :content, :created_at, :updated_at
json.url blog_url(blog, format: :json)
