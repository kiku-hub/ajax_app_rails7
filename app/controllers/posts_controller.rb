class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    Post.create(content: params[:content])
    # フォームから送られたcontentのデータで、新しいPostをデータベースに保存。
    render json:{ post: post }
    

  end
end
