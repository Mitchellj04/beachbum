class OrdersController < ApplicationController


    def show 

    end

    def create 
        order = Order.create!(order_params)
        render json: order, status: :created
    end


    private 

    def order_params 
        params.permit(:user_id)

    end
end
