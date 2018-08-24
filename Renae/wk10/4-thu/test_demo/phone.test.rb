require_relative 'phone'

passedTests = 0
testCount = 0

number = Phone.new('123456789')
if number.international? == true
  puts 'International number: test passed!'
  passedTests += 1
else
  puts 'International number: test failed!'
end
testCount += 1

number = Phone.new('23456789')
if !number.international?
  puts 'Local number: test passed!'
  passedTests += 1
else
  puts 'Local number: test failed!'
end
testCount += 1

number = Phone.new('12345')
if number.allDigits?
  puts 'All numbers: test passed'
  passedTests += 1
else
  puts 'Not all numbers: test failed'
end
testCount += 1

number = Phone.new('0431951954')
if number.sixNums?
  puts 'Has 10 numbers: test passed'
  passedTests += 1
else
  puts 'Does not have 10 numbers: test failed'
end
testCount += 1




puts "#{passedTests} out of #{testCount} have passed"