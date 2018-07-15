# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.

class Client

  def initialize(name, num_children, age)
    @name = name
    @num_children = num_children
    @age = age
    @pets = []
  end

  def name()
    @name
  end

  def add_pet(pet)
    @pets << pet
end

  # def adopt()
  #   @pets << ??


end

