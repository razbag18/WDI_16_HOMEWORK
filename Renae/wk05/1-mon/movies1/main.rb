     
require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname: 'movie_database_search')
  result = conn.exec(sql)
  conn.close
  return result
end

def save_to_db
  ratings = if @movie['Ratings'][2]
    @movie['Ratings'][2]['Value']
  else
    'N/A'
  end
  sql = "INSERT INTO movies(title, poster, director, year, rated, country, ratings, boxoffice, plot, imdbID) VALUES ('#{ @movie['Title'] }', '#{ @movie['Poster']}', '#{ @movie['Director']}', '#{@movie['Year']}', '#{@movie['Rated']}','#{ @movie['Country']}', '#{ ratings }', '#{ @movie['BoxOffice']}', '#{@movie['Plot']}', '#{ @movie['imdbID'] }');"
  run_sql(sql)
end

get '/' do
  erb(:index)
end

get '/movie_search' do
  @movie_selection = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&s=' + params[:movie_request])
  # binding.pry
  erb(:movie_search)
end

get '/movie' do
  sql = "SELECT * FROM movies WHERE imdbID = '#{params[:imdbID]}';"
  result = run_sql(sql)
  if result.cmd_tuples == 0
    @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&i=' + params[:imdbID])
    save_to_db
  else
    @movie = result.first
  end
  binding.pry
  erb(:movie)
end





