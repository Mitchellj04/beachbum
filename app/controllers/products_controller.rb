class ProductsController < ApplicationController
    skip_before_action :authorize
    skip_before_action :authorize_admin
    # before_destroy :delete_s3_image

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

    def create 
        product = Product.create!(product_params)
        render json: product, status: :created
        # debugger
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors.full_messages}
    end

    def destroy
        product = find_product
        image = product.image.attachment
        image.purge
        product.delete
        head :no_content
    end


    private 

    def product_params
        params.require(:product).permit(:title, :size, :color, :image, :price, :category_id, :gender_id)
    end

    def find_product 
        Product.find(params[:id])
    end

    def delete_s3_image
        key = self.image.key.split('amazonaws.com/')[1]
        S3_BUCKET.object(key).delete
    end
end
