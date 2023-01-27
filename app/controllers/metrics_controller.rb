class MetricsController < ApplicationController

    # This method returns metrics ordered by wins and returns the top 10.
    def index
        @metrics = Metric.order(wins: :desc)
        render json: @metrics
    end

    # This method returns a random user from the DB for competitive page
    def showrandom
        metric = Metric.order("RANDOM()").first
        while current_user.id == Metric.user_id
            metric = Metric.order("RANDOM()").first
        end
        render json: metric
    end

    def usershow
        user = User.all
        render json: user
    end

    def show
        metric = Metric.find(params[:id])
        render json: metric
    end

    def create
        metric = Metric.create(metric_params)
        if metric.valid?
            render json: metric
        else
            render json: metric.errors, status: 422
        end
    end

    def update
        metric = Metric.find(params[:id])
        metric.update(metric_params)
        if metric.valid?
            render json: metric
        else
            render json: metric.errors, status:422
        end
    end

    def destroy 
        metric = Metric.find(params[:id])
        if metric.destroy
            render json: metric
        else
            render json: metric.errors, status: unproccessable_entity
        end
    end

    private
    def metric_params
        params.require(:metric).permit(:location, :name_of_run, :run_difficulty, :elevation_change, :average_speed, :number_of_runs, :comment, :wins, :user_id)
    end
    
end
