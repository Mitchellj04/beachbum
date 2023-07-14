class GendersController < ApplicationController
    skip_before_action :authorize
    skip_before_action :authorize_admin

    def index 
        gender = Gender.all 
        render json: gender, status: 200
    end
end
