class UsersController < ApplicationController
    skip_before_action :authorize
    skip_before_action :authorize_admin
    

    def index
        user = User.all
        render json: user
    end 

    def profile 
        user = @current_user
        render json: user
    end

    def create 
        user = User.create!(user_params)
        shipping = Shipping.create!(shipping_params.include?(user.id))
        session[:user_id] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}
    end

    # def show 
        
    # end


    private 


    def shipping_params
        params.permit(:address, :town, :zipcode, :state, :user_id)
    end

    def user_params
        params.permit(:email, :phone, :name, :password)
    end
    
end
