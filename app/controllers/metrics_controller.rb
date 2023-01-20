class MetricsController < ApplicationController

    # This method returns metrics ordered by wins and returns the top 10.
    def index
        @metrics = Metric.order(wins: :desc).limit(10)
        render json: @metrics
    end

    def random
        metric = Metric.order
        render json: metric
    end

    def create
    end

    def update
    end

    def destroy 
    end

    private
    def metric_params
        params.require(:metric).permit(:location, :name_of_run, :run_difficulty, :elevation_change, :average_speed, :number_of_runs, :comment, :wins, :user_id)
    end
    
end
