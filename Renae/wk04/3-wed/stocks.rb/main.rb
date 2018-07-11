require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'stock_quote'

get '/stock_price' do #anything after the domain the request is coming into /about
  # if (:index).empty?
  #   return '<p>Please enter valid stock</p>'
  # else
  erb(:index)
end

get '/sum' do
  @total = StockQuote::Stock.quote(params[:stockrequest]).latest_price
  erb(:stock_page)
end

get '/about' do #anything after the domain the request is coming into /about
  return '<p>goodbye to yahoo finance</p>'
end

# get '/sum' do
#    @total = StockQuote::Stock.quote("msft").latest_price
#    erb(:stock_page)
#  end



