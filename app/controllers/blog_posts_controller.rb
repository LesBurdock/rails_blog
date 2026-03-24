
class BlogPostsController < ApplicationController
    before_action :set_blog_post, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only: [:edit, :update, :destroy]

    def index
        @blog_posts = BlogPost.all.order(created_at: :desc)
    end

    def show
    end

    def new
        @blog_post = BlogPost.new
    end

    def create
        @blog_post = current_user.blog_posts.new(blog_post_params)

        if @blog_post.save
          redirect_to @blog_post, notice: 'Blog post was created.'
        else
          render :new, status: :unprocessable_entity
        end
    end

    def edit
    end

    def update
        if @blog_post.update(blog_post_params)
            redirect_to @blog_post
        else
            render :edit, status: :unprocessable_entity
        end
    end

    def destroy
        @blog_post.destroy
        redirect_to root_path
    end

    private

    def set_blog_post
        @blog_post = BlogPost.find(params[:id])
    end

    def blog_post_params
        params.require(:blog_post).permit(:title, :content, :extract, :photo)
    end

    def authorize_user!
        unless @blog_post.user_id == current_user.id
          redirect_to blog_posts_all_path, alert: 'You are not authorized to edit or delete this post.'
        end
    end
end