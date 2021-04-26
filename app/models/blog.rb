class Blog < ApplicationRecord
  validates :name, presence: true
  validates :title, presence: true
  validates :flair, presence: true
end
