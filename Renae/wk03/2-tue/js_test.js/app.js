// JS Variables
// Assign the string "Jack" to a variable called captain 

var captain = "Jack"; 
var phrase = "Oh " + captain + ", my " + captain;

// JS Conditionals
// Add these two lines to your JS file:

var souls = 3;
var lifeRafts = 2;

if(souls > lifeRafts){
  console.log("SOS!");
}

//Write an if statement that console.logs "SOS!" 
//if there are more souls than lifeRafts 


// Data Structures - JS Arrays
// Create an array named weekend with just 'Saturday' in it 
// Write JS to add 'Sunday' to the end of the weekend array 
// Write JS to add 'Friday' to the front of the weekend array 
// Write JS to access 'Saturday' in the array and assign to a variable named day
// Write JS to remove 'Friday' from the array 

var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday")
var day = weekend[1];
weekend.shift();

// Data Structures - JS Objects
// Write an object literal named brain having a property of energyLevel with a value of 10 
var brain = {
  energyLevel: 10
}
// Write JS to assign the property of energyLevel to a variable named energy 
var energy = brain.energyLevel
// Write JS to add a dream property to the brain object that holds the string 'electric sheep'
brain.dream = "electric sheep";


// Write a function to return the area of a rectangle (the product of its length and its width) 
// Invoke the function with 3 and 4 as arguments and save it to a variable 

var areaRectangle = function(length, width){
  return length*width;
}
rectangle = areaRectangle(3,4);


// In the following code sample:

var fruits = ['banana', 'apple', 'kiwi'];

var addFruit = function(arr) {
   arr.push('mango'); }

addFruit(fruits);
console.log(fruits);


// When fruits gets console logged, it displays 
// ["banana", "apple", "kiwi", "mango"]. Explain in plain english why the 
//global variable fruits gets modified, when the local variable arr is getting a new fruit added?

//because you're passing in the array fruits as the argument, 
//hence the function addFruit literally pushes 'mango' to any array you pass in

// Create a function
// Create a function which receives a word as an input and 
// checks if it looks the same when the letters are backwards.

var checkBackwards = function(word){
  var wordSplit = word.split('');
  var wordReversed = wordSplit.reverse();
  var wordBackwards = wordReversed.join('');
  if (word === wordBackwards){
    return true;
  } else return false;
  
}

checkBackwards('anna')


 









