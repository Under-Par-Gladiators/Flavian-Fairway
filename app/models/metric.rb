class Metric < ApplicationRecord
    belongs_to :user
    validates :location, :name_of_run, :run_difficulty, :elevation_change, :average_speed, :number_of_runs, :comment, :wins, :user_id, presence: true
    validates :user_id, uniqueness: true
end
