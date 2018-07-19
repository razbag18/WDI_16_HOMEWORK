require 'pry'

class Robot

  def initialize
    name_array = []
    2.times do
    name_array.push ('A'..'Z').to_a.sample
    end
    3.times do
      name_array.push ('0'..'9').to_a.sample
    end
    @name = name_array.join
    return @name
  end

  def name
    return @name
  end

  def reset
    name_array = []
    2.times do
    name_array.push ('A'..'Z').to_a.sample
    end
    3.times do
      name_array.push ('0'..'9').to_a.sample
    end
    @name = name_array.join
    return @name
  end

end

puts "Robot 1: "
robot1 = Robot.new
3.times do
  puts robot1.name
end
puts "Robot 2: "
robot2 = Robot.new
3.times do
  puts robot2.name
end

puts "Return to factory settings: "
puts "Robot 3: "
robot3 = Robot.new
puts robot3.reset




# robots = []

# 100.times do 
#   robots << Robot.new
# end