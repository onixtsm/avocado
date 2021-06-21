class HomeController < ApplicationController
  $text = [
    'So, welcome to my website. I have to admit that major releases will be stopped for some time, as I have to deal with some backend stuff (such as code structuring, code comenting, branch stucturing etc).', "Nearest thing to happen would be adding some databases, fixing game's issues and starting to hold all these messages in one \"Blog\" type database.", "Probably, if you see any updates, than theese would be cosmetics (css), because I like to do it when I don't want to de anything.", 'Thnak you for reading, onix'
  ]

  def index
    @blogs = Blog.last(3)
  end

  def about; end
end
