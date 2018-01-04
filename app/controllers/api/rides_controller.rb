module Api
  class RidesController < ApplicationController

    def show
      # rides = Ride.joins(:user).where('user.id == ?', params[:id])
      rides = Ride.where('user_id = ?', params[:id])
      render json: { data: rides, status: 200 }
    end

    def create
      ride = Ride.create(ride_params)
      if ride.save
        render json: { data: ride, status: 200 }
      else
        render json: ErrorSerializer.serialize(ride.errors), status: 422
      end
    end

    def update
      ride = Ride.find(params[:id])
      ride.update(ride_params)
      render json: { data: ride, status: 200 }
    end

    def destroy
      ride = Ride.find(params[:id])
      Ride.destroy(params[:id])
      render json: { data: ride, status: 200 }
    end

    private def ride_params
      params.require(:ride).permit(:date, :reason, :from, :to, :return_trip, :distance)
    end

  end
end