class Api::VideosController < ApplicationController

  before_action :set_video, only: [:show, :update, :destroy]

  def index
    render json: Video.all 
  end

  def show
    render json: @video
  end

  def create
    video = Video.new 
    video.title = params[:title] ? params[:title] : video.title
    video.description = params[:description] ? params[:description] : video.description
    video.genre = params[:genre] ? params[:genre] : video.genre 
    video.duration = params[:duration] ? params[:duration] : video.duration
    video.trailer = params[:tailer] ? params[:trailer] : video.trailer

    file = params[:file]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_video = Cloudinary::Uploader.upload(file, public_id: file.original_filename, :resource_type => :video, secure: true)
        video.url = cloud_video['secure_url']
      rescue => exception
        # render json: {errors: exception}, status: 422 
        
      end
    end 
    if video.save
      render json: video
    else
      render json: video.errors, status: 422
    end

  end

  def update
    # @video #Video.find(params[:id])
    @video.title = params[:title] ? params[:title] : @video.title
    @video.description = params[:description] ? params[:description] : @video.description
    video.genre = params[:genre] ? params[:genre] : video.genre 
    video.duration = params[:duration] ? params[:duration] : video.duration
    video.trailer = params[:tailer] ? params[:trailer] : video.trailer

    file = params[:file]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_video = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @video.url = cloud_image['secure_url']
      rescue => exception
        render json: {errors: exception}, status: 422 
        
      end
    end 
    
    if @video.save 
      render json: @video 
    else 
      render json: {errors: @video.errors.full_messages}, status: 422
    end 
    
  end

  def destroy
    @video.destroy
  end

  private

  def set_video
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :description, :duration, :trailer, :genre, :url)
  end
end
