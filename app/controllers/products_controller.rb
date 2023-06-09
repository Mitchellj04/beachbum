class ProductsController < ApplicationController
    skip_before_action :authorize
    skip_before_action :authorize_admin

    def index 
        product = Product.all
        render json: product 
    end

    def show 
        product = find_product
        render json: product
    end


    private 

    def find_product 
        Product.find(params[:id])
    end
end
