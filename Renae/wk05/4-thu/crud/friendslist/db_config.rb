require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'friendslist'

}

ActiveRecord::Base.establish_connection(options)