class SessionsController < ApplicationController
    skip_before_action :authorize
    skip_before_action :authorize_admin

    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: ["Must be a valid Username or Password"]}, status: :unauthorized
        end
    end

    def admin 
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: ["Must be a valid Username or Password"]}, status: :unauthorized
        end
        # debugger
    end


end