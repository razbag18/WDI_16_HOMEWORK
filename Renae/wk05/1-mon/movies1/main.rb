     
require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb(:index)
end

get '/movie' do
  @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t=' + params[:movie_request])
  erb(:movie)
end




