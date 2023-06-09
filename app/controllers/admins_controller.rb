class AdminsController < ApplicationController
    skip_before_action :authorize_admin

end
