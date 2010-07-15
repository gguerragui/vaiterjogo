class UsersController < ApplicationController

  def index
    @user = current_user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Usuário cadastrado com sucesso."
      redirect_to root_url
    else
      render :action => 'new'
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes(params[:user])
      flash[:notice] = "Dados do usuário alterados com sucesso."
      redirect_to root_url
    else
      render :action => 'edit'
    end
  end
end

