module Api
  class RidesController < ApplicationController

    def index
      render json: Ride.all
    end

    def create
      ride = Ride.create(ride_params)
      render json: ride
    end

    def update
      ride = Ride.find(params[:id])
      ride.update(ride_params)
      render json: ride
    end

    def destroy
      ride = Ride.find(params[:id])
      Ride.destroy(params[:id])
      render json: ride
    end

    private def ride_params
      params.require(:ride).permit(:date, :reason, :from, :to, :return_trip, :distance)
    end
  end
end