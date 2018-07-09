# Ask the user for two inputs and store them in their own variables...

# A starting temperature value
# A temperature unit (e.g., f, C, K). Store each of those in a variable.
# Define a convert_temp method that takes those two user inputs as arguments.

# Inside the method, create a conditional statement that contains a block for each unit of temperature. It will look something like this...

puts("Enter starting temperature: ")

temp_value = gets().chomp()

puts("What temperature unit? f, C, K? ")

temp_unit = gets().chomp()

def convert_temp(temp_value, temp_unit)
  if temp_unit == "f"
    c = temp_value - 32 / 1.8
    k = temp_value + 459.67 / 1.8
    puts("celcius = #{c}")
    puts("kelvin = #{k}")

  elsif temp_unit == "C"
    f = temp_value * 1.8 + 32
    k = temp_value + 273.15
    puts("farenheit = #{f}")
    puts("kelvin = #{k}")
  elsif temp_unit == "K"
    c = temp_value - 273.15
    f = temp_value * 1.8 - 459.67
    puts("celcius = #{c}")
    puts("farenheit = #{f}")
  end
end

    convert_temp(temp_value.to_i, temp_unit)



