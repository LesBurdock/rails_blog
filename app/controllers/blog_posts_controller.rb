
class BlogPostsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only: [:edit, :update, :destroy] 
    
    def index
        @blog_posts = BlogPost.all
    end

    def show
        @blog_post = BlogPost.find(params[:id])
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
        @blog_post = BlogPost.find(params[:id])
    end

    def update
        @blog_post = BlogPost.find(params[:id])
        if @blog_post.update(blog_post_params)
            redirect_to @blog_post
        else
            render :new , status: :unprocessable_entity
        end 
    end

    def destroy
        @blog_post = BlogPost.find(params[:id])
        @blog_post.destroy
        redirect_to root_path 
    end

    private
    def blog_post_params
        params.require(:blog_post).permit(:title, :content, :extract, :photo)
    end
     # Set the post for actions like show, edit, update, destroy

    def authorize_user!
        unless @blog_post.user_id == current_user.id
          redirect_to posts_path, alert: 'You are not authorized to edit or delete this post.'
        end
      end
end