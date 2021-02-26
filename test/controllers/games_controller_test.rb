require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  test "should get catcher" do
    get games_catcher_url
    assert_response :success
  end

end
