class CategoriesController < ApplicationController
    skip_before_action :authorize 
    skip_before_action :authorize_admin

    def index 
        category = Category.all
        render json: category
    end

end
