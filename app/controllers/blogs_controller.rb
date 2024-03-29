# frozen_string_literal: true

# Blog class
class BlogsController < ApplicationController
  before_action :set_blog, only: %i[show edit update destroy]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_tags
  before_action :correct_user, only: [:edit, :update, :destroy]

  def correct_user
    if !current_user.admin?
      @blog = current_user.blogs.find_by(params[:id])
    else
      @blog = Blog.find(params[:id])
    end
    redirect_to blogs_path, notice: "No, no" if @blog.nil?
  end

  def set_tags
    @tags = ['Update', 'Opinion', nil]
  end

  # GET /blogs or /blogs.json
  def index
    @blog = Blog.order('created_at desc')
    return if params[:tag].blank?

    @blog = @blog.where(tag: params[:tag])

    respond_to do |format|
      format.html
      format.js
      format.json
    end
  end

  # GET /blogs/1 or /blogs/1.json
  def show; end

  # GET /blogs/new
  def new

    # @blog = Blog.new
    @blog = current_user.blogs.new()
  end

  # GET /blogs/1/edit
  def edit; end

  # POST /blogs or /blogs.json
  def create
    # @blog = Blog.new(blog_params)
    @blog = current_user.blogs.build(blog_params)
    @blog.name = current_user.name
    @blog.user_id = current_user.id
    respond_to do |format|
      if @blog.save
        format.html { redirect_to @blog, notice: 'Blog was successfully created.' }
        format.json { render :show, status: :created, location: @blog }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogs/1 or /blogs/1.json
  def update
    respond_to do |format|
      if @blog.update(blog_params)
        format.html { redirect_to @blog, notice: 'Blog was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1 or /blogs/1.json
  def destroy
    @blog.destroy
    respond_to do |format|
      format.html { redirect_to blogs_url, notice: 'Blog was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_blog
    @blog = Blog.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def blog_params
    params.require(:blog).permit(:title, :content, :tag)
  end
end
