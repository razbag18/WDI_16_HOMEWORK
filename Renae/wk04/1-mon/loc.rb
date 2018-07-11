require 'pry'

#CLI command line interface program

print "enter filename: "
filename = gets.chomp

print IO.readlines('data.txt').length 
print " lines.\n"


