class Animal

  def initialize(name, age, gender, species)
    @animal_name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def add_toy(toy)
      @toys << toy
  end

  def name()
    @animal_name
  end

  def age()
    @age
  end

  def gender()
    @gender
  end

  def species()
    @species
  end

end


