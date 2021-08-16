class HomeController < ApplicationController

  def index
    @blogs = Blog.last(3).reverse
  end

  def about; end
end
