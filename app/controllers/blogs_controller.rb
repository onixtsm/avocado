# frozen_string_literal: true

class BlogsController < ApplicationController
  before_action :set_blog, only: %i[show edit update destroy]
  before_action :set_tags

  def set_tags
    @tags = [['All', nil], 'Update', 'Opinion']
  end

  # GET /blogs or /blogs.json
  def index
    @blogs = Blog.order('created_at desc')
    @blogs = @blogs.where(tag: params[:tag]) unless params[:tag].blank?
    respond_to do |format|
      format.html
      format.js { render 'index.js.haml' }
      format.json { render json: @blogs.to_json }
    end
  end

  # GET /blogs/1 or /blogs/1.json
  def show; end

  # GET /blogs/new
  def new
    @blog = Blog.new
  end

  # GET /blogs/1/edit
  def edit; end

  # POST /blogs or /blogs.json
  def create
    @blog = Blog.new(blog_params)

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
    params.require(:blog).permit(:name, :title, :content, :tag)
  end
end
