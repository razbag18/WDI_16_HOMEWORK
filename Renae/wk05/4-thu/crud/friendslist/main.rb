     
require 'sinatra'
require 'sinatra/reloader'     
require 'pg'


def run_sql(sql)
  conn = PG.connect(dbname: 'friendslist')
  result = conn.exec(sql)
  conn.close
  return result
end

require_relative 'db_config'
require_relative 'models/friend'

# Main page with list of all friends in my database
get '/' do
  redirect '/friends'
end

get '/friends' do
  @friends = Friend.all
  erb :index
end

#Route that takes you to the form page
get '/friends/new' do
  erb :new
end

#Page that lists individual friends details
get '/friends/:id' do
  @friends = Friend.find( params[:id] )
  erb :friend_details
end

#Page that creates my new friend
post '/' do
  friend = Friend.new
  friend.name = params[:name]
  friend.image_url = params[:image_url]
  friend.phone_number = params[:phone_number]
  friend.save
  redirect '/'
end

#Page that deletes friend
delete '/friends/:id' do
  friend = Friend.find( params[:id] )
  friend.destory
  redirect '/'

end

#Page that edits individual friends details
get '/friends/:id/edit' do
  @friends = Friend.find(params[:id])
  erb :edit
end

put '/friends/:id' do
  friend = Friend.find(params[:id])
  friend.name = params[:name]
  friend.image_url = params[:image_url]
  friend.phone_number = params[:phone_number]
  dish.save

  redirect "/friends/#{ params[:id] }"

end



