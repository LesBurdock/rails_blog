# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Start development server:**
```bash
bin/dev
```
This runs both the Rails server and the Tailwind CSS watcher (via `Procfile.dev`).

**Setup:**
```bash
bundle install
rails db:create
rails db:migrate
```

**Run all tests:**
```bash
rails test
```

**Run a single test file:**
```bash
rails test test/models/blog_post_test.rb
```

**Run system tests:**
```bash
rails test:system
```

## Architecture

**Stack:** Rails 7.0.8 / Ruby 3.2.0, PostgreSQL, Tailwind CSS v4, Hotwire (Turbo + Stimulus), importmaps (no webpack/esbuild).

**Authentication:** Devise gem with customised views in `app/views/devise/`. Users have an `avatar` via Active Storage.

**Authorization:** Manual — `BlogPostsController` uses `before_action :authorize_user!` to restrict edit/update/destroy to the post owner by comparing `blog_post.user_id == current_user.id`.

**Models:**
- `User` — Devise auth, `has_many :blog_posts, dependent: :destroy`, `has_one_attached :avatar`
- `BlogPost` — `belongs_to :user`, `has_one_attached :photo`, validates `title` and `content` presence

**File Storage:** Active Storage using Cloudinary in development and production (configured via `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_URL` env vars). AWS S3 config also exists but is not the active service. Use `dotenv-rails` for local env vars.

**CSS:** Tailwind CSS v4 with a custom theme. Source files are in `app/assets/tailwind/`:
- `application.css` — `@import "tailwindcss"` and `@theme` block defining custom colour tokens and font families
- `components.css` — reusable component classes (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-link`, `.tab-active`)

Custom colour tokens (use these instead of generic Tailwind colours):
- `textRed`, `veryLightRed`, `veryDarkBlue`, `grayishBlue`, `veryDarkGrayishBlue`, `veryDarkGrayBlue`, `veryDarkDesaturatedBlue`, `veryDarkBlackBlue`

Custom fonts: `font-overpass` (body default), `font-ubuntu`

**JavaScript:** All JS lives in `app/javascript/application.js`. Uses `turbo:load` event (not `DOMContentLoaded`) for all DOM initialisation to work correctly with Turbo navigation. Handles navbar dropdown, mobile menu, tab switching, and file input display.

**Views layout:**
- `app/views/layouts/application.html.erb` — loads Tailwind compiled CSS (`stylesheet_link_tag "tailwind"`) and importmap JS; renders `shared/_footer`
- `app/views/shared/_navbar.html.erb` — shared navbar partial
- `app/views/shared/_footer.html.erb` — shared footer partial
- `app/views/blog_posts/_form.html.erb` — shared form for new/edit

**Routes:** Manual (not `resources`). Root goes to `home#index`. Blog post routes are all explicitly declared under `/blog_posts`.
