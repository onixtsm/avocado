# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'bcrypt', '~> 3.1.7'
gem 'bcrypt_pbkdf', '>= 1.0', '< 2.0'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'capistrano', '~> 3.11'
gem 'capistrano-passenger', '>= 0.2.1'
gem 'capistrano-rails', '~> 1.4'
gem 'capistrano-rbenv', '~> 2.1', '>= 2.1.4'
gem 'devise'
gem 'ed25519', '>= 1.2', '< 2.0'
gem 'haml-rails', '~> 2.0'
gem 'jbuilder', '~> 2.7'
gem 'mysql2', '>= 0.4.4'
gem 'passenger'
gem 'rails', '~> 6.1.3.1'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 6.X'
gem 'webrick'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'pry'
  gem 'rubocop'
end

group :development do
  gem 'awesome_print'
  #  gem 'bullet'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
  #  gem 'xray-rails'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
