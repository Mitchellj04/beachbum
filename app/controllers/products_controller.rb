class ProductsController < ApplicationController
    skip_before_action :authorize

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
