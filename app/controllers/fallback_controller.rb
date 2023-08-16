class FallbackController < ActionController::Base

    def index
      # React app index page
      render file: 'public/index.html'
    end

    # def index 
    #     render file: "src/AdminLogin2.js"
    # end

    # def admin 
    #     render file: "src/AdminLogin2.js"
    # end
end