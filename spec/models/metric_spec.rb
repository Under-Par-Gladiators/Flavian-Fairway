require 'rails_helper'


RSpec.describe Metric, type: :model do
  it "Throws an error if metric does not contain location" do
    testy = Metric.create location:nil, name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:0, user_id:1
    expect(testy.errors[:location]).to_not be_empty
  end
  it "Throws an error if metric does not contain name_of_run" do
    testy = Metric.create location: "here", name_of_run: nil, run_difficulty: 3, elevation_change: 4000, average_speed: 30, number_of_runs: 3, comment: "this slapped", wins: 0, user_id:1
    expect(testy.errors[:name_of_run]).to_not be_empty
  end
  it "Throws an error if metric does not contain run_difficulty" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: nil, elevation_change: 4000, average_speed: 30, number_of_runs: 3, comment: "this slapped", wins: 0, user_id:1
    expect(testy.errors[:run_difficulty]).to_not be_empty
  end
  it "Throws an error if metric does not contain elevation_change" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: nil, average_speed: 30, number_of_runs: 3, comment: "this slapped", wins: 0, user_id:1
    expect(testy.errors[:elevation_change]).to_not be_empty
  end
  it "Throws an error if metric does not contain average_speed" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: 4000, average_speed: nil, number_of_runs: 3, comment: "this slapped", wins: 0, user_id:1
    expect(testy.errors[:average_speed]).to_not be_empty
  end
  it "Throws an error if metric does not contain number_of_runs" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: 4000, average_speed: 30, number_of_runs: nil, comment: "this slapped", wins: 0, user_id:1
    expect(testy.errors[:number_of_runs]).to_not be_empty
  end
  it "Throws an error if metric does not contain comment" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: 4000, average_speed: 30, number_of_runs: 3, comment: nil, wins: 0, user_id:1
    expect(testy.errors[:comment]).to_not be_empty
  end
  it "Throws an error if metric does not contain wins" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: 4000, average_speed: 30, number_of_runs: 3, comment: "this slapped", wins: nil, user_id:1
    expect(testy.errors[:wins]).to_not be_empty
  end
  it "Throws an error if metric does not contain user_id" do
    testy = Metric.create location: "here", name_of_run: "bigrun", run_difficulty: 3, elevation_change: 4000, average_speed: 30, number_of_runs: 3, comment: "this slapped", wins: 0, user_id:nil
    expect(testy.errors[:user_id]).to_not be_empty
  end
end
