class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.content = params[:content]
    comment.planet_id = params[:planet_id]
    comment.save
    redirect_to "/planets/#{ params[:planet_id] }"
  end
end
