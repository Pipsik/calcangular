require 'test_helper'

class ActionsControllerTest < ActionController::TestCase
  test "should get take" do
    get :take
    assert_response :success
  end

  test "should get contribute" do
    get :contribute
    assert_response :success
  end

end
