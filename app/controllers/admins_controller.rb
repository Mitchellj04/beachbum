class AdminsController < ApplicationController
    # skip_before_action :authorize_admin
    skip_before_action :authorize

    def login 
        admin = @admin 
        render json: admin 
    end
    

end
