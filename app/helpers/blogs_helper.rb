module BlogsHelper

  def get_date(blog, pattern = "%d-%m-%Y")
    blog.created_at.strftime(pattern)
  end

end
