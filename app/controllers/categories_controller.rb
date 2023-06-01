class CategoriesController < ApplicationController
    skip_before_action :authorize 

    def index 
        category = Category.all
        render json: category
    end

end
