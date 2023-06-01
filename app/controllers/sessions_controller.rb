class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create 

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            sessions[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: ["Must be a valid Username or Password"]}, status: :unauthorized

    end



end