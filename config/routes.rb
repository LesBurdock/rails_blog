Rails.application.routes.draw do
  devise_for :users
    root "home#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "blog_posts/all", to: "blog_posts#index"
  get "blog_posts/new", to: "blog_posts#new", as: :new_blog_post
  get "blog_posts/:id/edit", to: "blog_posts#edit", as: :edit_blog_post
  patch "/blog_posts/:id", to: "blog_posts#update"
  delete "/blog_posts/:id", to: "blog_posts#destroy"
  get "/blog_posts/:id", to: "blog_posts#show", as: :blog_post
  post "/blog_posts", to: "blog_posts#create", as: :blog_posts
 
end
