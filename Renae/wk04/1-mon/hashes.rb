require 'pry'

# old syntax for hash
# => hashrocket
# movie = {
#   :title => 'sharknado',
#   :year => 2000,
#   :stars => ['shark']
# }

# movie = {
#   'title' => 'sharknado',
#   'year' => 2000,
#   'stars' => ['shark']
# }

# symbol - :title, :year :whatever

# #json - data format
# movie = 
# [
#   {
#     title: 'sharknado',
#     year: 2000,
#     stars: ['shark']
#   },
#   {
#     title: 'rubber',
#     year: 3000
#   },
#   {
#     title: 'sharknado 6'
#     year: 1000
#   }
# ]

# axel - 4
# megan - 5
# inder - 3
# kate - 4
# micael - 3

db = {
  2 => ['dt'],
  3 => ['inder', 'micael'],
  4 => ['megan', 'axel']
}

students = ['inder', 'micael', 'megan']

students.each do |student|
  puts student
end

#db is a collection of things
db.each do |score, students|
  puts "#{score} #{students.join(', ')}"
end

# binding.pry