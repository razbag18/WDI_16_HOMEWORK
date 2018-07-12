require 'sinatra'
require 'pry'
require 'sinatra/reloader'

get '/' do 
  erb(:index)
end

get '/:num_bottles' do
  erb(:num_bottles)
end

# get '/0' do 
#   return "<h1>0 more bottles of beer on the wall</h1><a href ='/'>Start Over</a>"
# end

