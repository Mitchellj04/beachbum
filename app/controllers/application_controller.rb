class ApplicationController < ActionController::API
include ActionController::Cookies

    before_action :authorize
    before_action :authorize_admin


    def authorize 
        @current_user = User.find_by(id: session[:user_id])
        return render json: {errors: ['Not Authorized']}, status: :unauthorized unless @current_user
    end

    def authorize_admin 
        @admin = Admin.find_by(id: session[:admin_id])
        return render json: {errors: ['Not Authorized']}, status: :unauthorized unless @admin
    end

    def index 
        render file: "src/AdminLogin2.js"
    end

    def admin 
        render file: "src/AdminLogin2.js"
    end

end
