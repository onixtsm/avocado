class Blog < ApplicationRecord

  belongs_to :user

  validates :title, presence: true

  # def get_date(pattern = "%d-%m-%Y")
  #   created_at.strftime(pattern)
  # end
end
