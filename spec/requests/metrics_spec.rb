require 'rails_helper'

RSpec.describe "Metrics", type: :request do
  describe "GET /index" do
    it "gets a list of top 10 metrics ordered by wins" do

      User.create(
        email: "test@test.com",
        password: "password",
        password_confirmation: "password",
        username: "testymctestpants"
      ) 
      user1 = User.find_by username: "testymctestpants"
      User.create(
        email: "test@test2.com",
        password: "password2",
        password_confirmation: "password2",
        username: "testymctestpants2"
      ) 
      user2 = User.find_by username: "testymctestpants2"
      User.create(
        email: "test@test3.com",
        password: "password3",
        password_confirmation: "password3",
        username: "testymctestpants3"
      ) 
      user3 = User.find_by username: "testymctestpants3"
      User.create(
        email: "test@test4.com",
        password: "password4",
        password_confirmation: "password4",
        username: "testymctestpants4"
      ) 
      user4 = User.find_by username: "testymctestpants4"
      User.create(
        email: "test@test5.com",
        password: "password5",
        password_confirmation: "password5",
        username: "testymctestpants5"
      ) 
      user5 = User.find_by username: "testymctestpants5"
      User.create(
        email: "test@test6.com",
        password: "password6",
        password_confirmation: "password6",
        username: "testymctestpants6"
      ) 
      user6 = User.find_by username: "testymctestpants6"
      User.create(
        email: "test@test7.com",
        password: "password7",
        password_confirmation: "password7",
        username: "testymctestpants7"
      ) 
      user7 = User.find_by username: "testymctestpants7"
      User.create(
        email: "test@test8.com",
        password: "password8",
        password_confirmation: "password8",
        username: "testymctestpants8"
      ) 
      user8 = User.find_by username: "testymctestpants8"
      User.create(
        email: "test@test9.com",
        password: "password9",
        password_confirmation: "password9",
        username: "testymctestpants9"
      ) 
      user9 = User.find_by username: "testymctestpants9"
      User.create(
        email: "test@test10.com",
        password: "password10",
        password_confirmation: "password10",
        username: "testymctestpants10"
      ) 
      user10 = User.find_by username: "testymctestpants10"
      User.create(
        email: "test@test11.com",
        password: "password11",
        password_confirmation: "password11",
        username: "testymctestpants11"
      ) 
      user11 = User.find_by username: "testymctestpants11"
      user1.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:0
      )
      user2.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:11
      )
      user3.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:8
      )
      user4.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:6
      )
      user5.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:16
      )
      bottomdog = user6.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:2
      )
      topdog = user7.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:21
      )
      user8.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:18
      )
      user9.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:11
      )
      user10.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:3
      )
      user11.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17
      )

      get '/metrics'

      metric = JSON.parse(response.body)
      first_metric = metric.first
      second_metric = metric.last
      expect(response).to have_http_status(200)
      expect(metric.length).to eq 10
      expect(metric.first['wins']).to eq 21
      expect(metric.last['wins']).to eq 2
    end
  end

  describe "GET /showrandom" do
  end


  describe "POST /create"do
  User.create(
      email: "test@text.com",
      password: "password",
      password_confirmation: "password",
      username: "testymctestpants"
    ) 
    user = User.first
  it "creates a metric" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(200)

    metric = Metric.last
    expect(metric.comment).to eq "this slapped"
  end
  it "cannot create metric without location" do

    metric_params = {metric: {name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['location']).to include "can't be blank"
  end
  it "cannot create metric without name_of_run" do

    metric_params = {metric: {location:"bigbear", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['name_of_run']).to include "can't be blank"
  end
  it "cannot create metric without run_difficulty" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun" , elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['run_difficulty']).to include "can't be blank"
  end
  it "cannot create metric without elevation_change" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['elevation_change']).to include "can't be blank"
  end
  it "cannot create metric without average_speed" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, number_of_runs:3, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['average_speed']).to include "can't be blank"
  end
  it "cannot create metric without number_of_runs" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, comment:"this slapped", wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['number_of_runs']).to include "can't be blank"
  end
  it "cannot create metric without comment" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, wins:17, user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['comment']).to include "can't be blank"
  end
  it "cannot create metric without wins" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", user_id:user.id}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
    expect(json_response['wins']).to include "can't be blank"
  end
  it "cannot create metric without user_id" do

    metric_params = {metric: {location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17}}

    post '/metrics', params: metric_params
    expect(response).to have_http_status(422)  
    json_response = JSON.parse(response.body)
  end
end
end

