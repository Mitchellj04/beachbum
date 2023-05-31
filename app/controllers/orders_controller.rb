class OrdersController < ApplicationController

    def index 
        orders = Order.all
        render json: orders 
    end

    def show 

    end

    def create 
        order = Order.create!(order_params)
        render json: order, status: :created
    end


    private 

    def order_params 
        params.permit(:user_id, :products)
    end
end
