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

    def update 
        product = find_product
        product.update(product_params)
        render json: product, status: 200
    end


    private 

    def product_params
        params.require(product).permit(:title, :description, :size, :color, :image, :price)
    end

    def find_product 
        Product.find(params[:id])
    end
end
