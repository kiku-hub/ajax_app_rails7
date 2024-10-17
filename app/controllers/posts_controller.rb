class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    # フォームから送られたcontentのデータで、新しいPostをデータベースに保存。
    render json:{ post: post }
    # renderはレスポンスを返すメソッドであり、json:はJSON形式でデータを返す指定です。また、{ post: post }はpostキーでpost変数の内容をJSONで返します。

  end
end
