class MetricsController < ApplicationController

    def index
        @metrics = Metric.all
        render json: @metrics
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
