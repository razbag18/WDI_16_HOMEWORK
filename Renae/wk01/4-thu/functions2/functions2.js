var combineWords = function(word1, word2) {
    return word1 + word2;
    }
    
    var newWord = combineWords('dog', 'house');
    
    console.log(newWord)

    // 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
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

// your code here

var lengths = function(arrayOfStrings) {
    //make a new empty containter/
    var newArray =[];
    //every time loop add it to the empty container
    for (var i =0; i <arrayOfStrings.length; i++){
       newArray.push(arrayOfStrings[i].length)
    }

    //return the container
    return newArray
}
//make sure variables are outside of the function and after
    var names = ['Renae', 'Shannon', 'Delilah'];
    
    //calling it on the console
    console.log(lengths(names))


//did it again to try to understand. still confused

var length = function(stringArray){
    //eventually going to add to this empty container by pushing stringArray into it
    var newerArray =[];

    for (var j = 0; j <stringArray.length; j++){
        newerArray.push(stringArray[j].length)

    }
    return newerArray
}
 var things = ['help', 'goodbye cruel world', 'too hard'];

 console.log(length(things));

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

var transmogrifier = function(num1, num2, num3){
    return (num1 + num2) *num3
    }
    console.log(transmogrifier(1, 2, 3));


// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'


var wordReverse = function(arr){
   //want to reverse the order of the array I put into the wordReverse 'machine'
    console.log(arr.reverse())
    }
//some arrays I've made
var wordsGoingToBeReversed = ['dog ', 'on' , 'sat ', 'cat '];
var anotherArray = ['mango ', 'apple', 'cherry ', 'pineapple'];
//calling the wordReverse 'machine'
wordReverse(anotherArray);

