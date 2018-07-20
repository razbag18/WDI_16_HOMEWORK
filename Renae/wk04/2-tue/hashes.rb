require 'pry'

a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
puts a[1]

# How would you add your name to the array?
a.push("Renae")

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
h[1]

# How would you return the string "Two"?
h[:two]

# How would you return the number 2?
h["two"].to_i

# How would you add {3 => "Three"} to the hash?
h[3] ="Three"

# How would you add {:four => 4} to the hash?
h[:four] = 4

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
"It's true!"
# What is the return value of is["Erik" == "Jonathan"]?
"It's false"
# What is the return value of is[9 > 10]?
"It's false"
# What is the return value of is[0]?
nil
# What is the return value of is["Erik"]?
nil

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# users.keys
# users.values
# users.class
# users.values.size

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7) #can write <<7

# How would you add yourself to the users hash?
users["Renae"] = {}
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select(&:even?)

# even_number = users["Anil"][:favorite_numbers].select do |number|
#   number.even?
# end

# How would you return an array of the favorite numbers common to all users?
users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
all_users_fav_nums = users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers] + users["Jonathan"][:favorite_numbers]

all_users_fav_nums = all_users_fav_nums.uniq.sort


result_arr = users.values.map do |hash| #map goes through array you give it, transforming an existing array to a new one, you give it the how, and you get a new array back with the result of the instructions you gave it. New array is called result_arr in this case 
  hash[:favorite_numbers] #just return this part for each hash
end.flatten.sort.uniq #flatten changes nested array to just one array, sorts it with .sort and get rid of duplicates with .uniq