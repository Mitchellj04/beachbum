class OrdersController < ApplicationController

    def index 
        orders = Order.all
        render json: orders 
    end

    def show 

    end

    def create 
        
        product_param = params[:products]
        order = Order.create!(order_params)
        product = Product.select { |item| product_param.include?(item.id)}
        # debugger
        order.products << product
        render json: order, status: :created
    end


    private 

    def order_params 
        params.require(:order).permit(:user_id)
    end

    # def order_params
    #     params.permit()
    # end
end
