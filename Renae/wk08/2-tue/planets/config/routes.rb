Rails.application.routes.draw do
  resources :planets
  resources :comments
  # resources :planets

  # # create 
  # get '/planets/new', to: 'planets#new'
  # post '/planets', to: 'planets#create'


  # # read
  # get '/planets', to: 'planets#index'
  # get '/planets/:id', to: 'planets#show'

  # #update
  # get '/planets/:id/edit', to: 'planets#edit'
  # put '/planets/:id', to: 'planets#update'

  # # delete

  # delete '/planets/:id', to: 'planets#destroy'
 





end
