class Api::SessionsController < ApplicationController
    # before_action :require_logged_out, only: [:create]
    # before_action :require_logged_in, only: [:destroy]
  
    #this is just going to show the current user
    def show
      @user = current_user
      if @user #if there is a current_user
        render 'api/users/show' #render jbuilder. this is the path to that file 
      else
        render json: {user: nil}
      end
    end
  
    def create
      email = params[:email]
      password = params[:password]
      @user = User.find_by_credentials(email, password)
  
      if @user #if a user is found
        login!(@user) #login that user and then
        render 'api/users/show' #show them this page
      else
        render json: { errors: ['Invalid credentials'] }
      end
    end
  
    def destroy
      logout!
      render json: { message: 'success' }
    end
  
  end