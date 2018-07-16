# require other files

require_relative 'animal'
require_relative 'client'

$shelter = [
  [],
  []
  ]

def add_animal
    print "Name of animal: "
    name = gets.chomp
    print "Age of #{name}: "
    age = gets.chomp
    print "Gender? (M/F) "
    gender = gets.chomp.upcase()
    print "Species of #{name}?: "
    species = gets.chomp
    new_animal = Animal.new(name, age, gender, species)
    loop do
      print "Add toy: "
      new_animal.add_toy(gets.chomp)
      print "Add another toy? (y/n) "
      answer = gets.chomp
      if answer == "n"
        break
      end
    end
    $shelter[0].push(new_animal)
  end

  

def add_client
  print "Name of client: "
  name = gets.chomp
  print "Number of children? "
  num_children = gets.chomp
  print "Age of #{name}: "
  age = gets.chomp
  new_client = Client.new(name, num_children, age)
  loop do
    print "Do you have an animal you'd like to surrender? (y/n) "
    answer = gets.chomp
    if answer == "y"
      add_animal()
    else 
      break
    end
  end

  $shelter[1].push(new_client)
end

def adoption
  loop do
    print"Are you a registered client? (y/n)"
    answer = gets.chomp
    if answer == "n"
      add_client()
    elsif answer == "y"
      puts "What is your name?:"
      name = gets.chomp
      $shelter[1].each do |client|
        if name == client.name
          puts "#{client.name}, here is a list of all the animals in the shelter: \n"
        end
        if $shelter[0].empty?
          puts "Sorry, there's no animals in the shelter!\n"
        else
          $shelter[0].each do |animal|
            puts "#{animal.name}, #{animal.age}, #{animal.gender}, #{animal.species}"
            # code broke when put end here to stop the loop. dont know how to write end here and it doesnt break. want to end the loop
            puts "Which one would you like to adopt?: \n"
            pet = gets.chomp
            $shelter[0].each do |animal|
              if pet == animal.name
                puts "Congratulations #{client.name}, #{animal.name} has been successfully adopted into your family!"
                
                $shelter[1].each do |client| # go through each client
                  if name == client.name # check if its the right client
                    client.add_pet(pet) # add pet to right clients
                    require 'pry'
                    binding.pry
                    $shelter[0].each do |animal|
                    if pet == client.add_pet(pet)
                      $shelter[0].slice(pet)
                      
                    end
                  end
                end
                end 
                break
              end
            end  
          end
        end
      end
    end
    break
  end
end

# $shelter[1].push($shelter[0].pop) just pushes all animals in animal array into the client array, need to delve deeper into both arrays

loop do
  puts "Welcome to the Happi Tails Rescue Shelter!\nType 1 if you'd like to surrender an animal.\nType 2 if you'd like to register as a client. \nType 3 to display all animals in the shelter.\nType 4 to display all clients.\nType 5 to adopt.\nType 6 to exit."


  choice = gets.chomp
  if choice == "1"
    add_animal()
  elsif choice == "2"
    add_client()
  elsif choice == "3"
    puts "Current animals in the shelter:\n"
     if $shelter[0].empty?
      puts "Sorry, there's no animals in the shelter!\n"
    else
    $shelter[0].each do |animal|
      puts "#{animal.name}, #{animal.age}, #{animal.gender}, #{animal.species}"
    end
  end
  elsif choice == "4"
    puts "Clients registered to the shelter: \n"
     $shelter[1].each do |client|
      puts client.name
     end
  elsif choice == "5"
    adoption()
  else exit
  end

end

# require 'pry'
# binding.pry


# PROBLEMS
# WHEN I REGISTER ANIMALS THROUGH OPTION 1 AND THEN VIEW ANIMALS IN THE SHELTER, THE ANIMALS ALL SHOW UP. WHEN I GO TO ADOPT THEM, IT ONLY SHOWS ONE ANIMAL TO ADOPT, EVEN IF THERE IS MULTIPLE ANIMALS IN THE SHELTER?
# CANT ADOPT 



