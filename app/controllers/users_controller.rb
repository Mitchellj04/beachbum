class UsersController < ApplicationController

    def index
        user = User.all
        render json: user
    end 

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show 
        
    end


    private 

    def user_params
        params.permit(:email, :address, :phone, :name, :password)
    end
    
end
