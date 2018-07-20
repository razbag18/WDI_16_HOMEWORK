// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

var combineWords = function(word1, word2){
  return word1 + word2;
} 
var result = combineWords('hel', 'lo');
console.log(result);


// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birthYear, currentYear){
  var age = currentYear - birthYear;
  var ageBeforeBday = age - 1;
  console.log('You are either ' + age + ' or ' + ageBeforeBday);
}

calculateAge(1986, 2018);
calculateAge(1945, 2046);
calculateAge(1913, 1921);

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(string){ //function called length that accepts one parameter, a string
  var array = []; //function return an array of number 
  for (i = 0; i < string.length; i++){ //finding the length of a string by adding 1 to the amount of times it has to cylce through the for loop
    array.push(string[i].length)//pushing the length of the string into a new array
  }
  return array //returing the array of numbers 
}

var words = ['this', 'is', 'so', 'hard']

console.log(lengths(words))//pushing the words into the lengths function, and console 
//logging the length of the strings as numbers

//4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(num1, num2, num3){//three arguments, numbers
  var transmogrified = ((num1*num2)*num3)//transmogrified is the sum of those numbers
  return transmogrified//transmogrified is the returned value of that sum
}

(transmogrifier(4, 6, 7)) //the numbers 

//5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

var wordReverse = function(aString){
  var splitString = aString.split('');//splitting the word into an array on each letter
  var reverseWord = splitString.reverse();//reversing the array
  var joinWord = reverseWord.join('');//joining the array back into a string
  return joinWord; 
}

wordReverse('luna park');

/*

7. Vowel Count:
Return the number of occurrences of vowels in a word. 
Vowels are a, e, i, o, u, and y
Function signature (only look at this after you've thought 
about what it should look like)
*/

var vowelCount = function(word){ //function with 1 parameter
  var vowels = 0;//creating a variable called vowels, with a value of 0
  for (i=0; i <word.length; i++){//for loop that loops through the parameter's length
    if(word.toLowerCase().charAt(i) === 'a' || word.toLowerCase().charAt(i) === 'e' || word.toLowerCase().charAt(i) === 'i' || word.toLowerCase().charAt(i) === 'o' || word.toLowerCase().charAt(i) === 'u' || word.charAt(i) === 'y')//charAt function returns the character at the specified index in a string. 
    vowels += 1; //if a vowel, add to the vowel count
  }
  return vowels
  
}
vowelCount('sUpercAlifragIlisticexpialidocious');

var vowelCount = function(word) { 
  var counter = 0;
  word = word.toLowerCase();
  for (var i=0; i <word.length; i++) {
    if (word[i] === 'a' || 
        word[i] === 'e' || 
        word[i] === 'i' || 
        word[i] === 'o' || 
        word[i] === 'u' || 
        word[i] === 'y') {
      counter += 1;
    }
  }
  return counter; 
}
vowelCount('AARDVaRK');

var vowelCount = function(word) { 
  var counter = 0;
  word = word.toLowerCase();
  for (var i=0; i <word.length; i++) {
    if (word.includes('a', 'e', 'i', 'o', 'u', 'y')){
      counter += 1;
    }
  }
  return counter; 
}
vowelCount('bat')//now counting whole word. Need to do something after word.includes