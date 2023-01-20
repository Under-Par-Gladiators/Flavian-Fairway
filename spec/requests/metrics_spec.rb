require 'rails_helper'

RSpec.describe "Metrics", type: :request do
  describe "GET /index" do
    it "gets a list of metrics" do

    User.create(
      email: "test@test.com",
      password: "password",
      password_confirmation: "password",
      username: "testymctestpants"
    ) 
    user = User.last
    Metric.create(
      location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:0, user_id:user.id
    )
      get '/metrics'

      metric = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(metric.length).to eq 1
    end
  end

end

