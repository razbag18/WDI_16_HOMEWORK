//Data Types

typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: because the equation is not in () it is reading 
//as follows: typeof number 1 does not equal two: "true"


"hamburger" + "s"
// Prediction: "hamburger"
// Actual: "hamburger"

"hamburgers" - "s"
// Prediction: undefined
// Actual: NaN (not a number)

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: NaN
// Actual: -2 //Javascript does the calculation 
//in this sense but the correct practice would be Number("1") - Number("3")
//turning the string back into a number

"johnny" + 5
// Prediction: "johnny"5
// Actual: "johnny5" turns it all into a string

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

/*Javascript provides us with a number of native 
methods that allow us to interact with arrays. 
Find methods that do each of the following and provide an example...
*/

var fruits = ['apple', 'pear', 'orange', 'cherry', 'watermelon']
//Add an element to the back of an array.
fruits.push('fig');

//Remove an element from the back of an array
 fruits.pop();

 //Add an element to the front of an array.
fruits.unshift('fig');

//Remove an element from the front of an array.
fruits.shift();

//Concatenates all the elements in an array into a string.
var fruitsJoined = fruits.join(' '); //make a new variable to store the new string

//Separates the characters of a string into an array. This one is a string method.
var fruitsBackIntoArray = fruitsJoined.split(' ')

//What will the contents of the below arrays be after the code 
//samples are executed? Come up with an answer yourself
// before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop()
//removes 8

numbers.push(10)
//adds 10 to back of array

numbers.unshift(3)
//adds 3 to the front of the array

//What is the return value of the below code sample? 
//Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

//.join() turns the variable morse into a string, creating
//a new variable called moreMorse with a "dash" string between each element
//seperating the characters of the variable moreMorse into an array, seperating
//each element by the spaces

//What will the contents of the below array be after the 
//below code sample is executed? Come up with an answer yourself 
//before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()//accessing the first array first as anything done in []
//done first. then pops Pete as thats the last element in array [0]
bands[0].shift()
bands[1][3] = "Renae"

//empty variable called bands. using push() method, pushing conents of
//array beatles into the array bands
//unshift() method pushes the contents of the array stones, into the array bands
//bands.length - 1.pop() finds the length of the array bands, 
//and removed the 2nd last element in the array **Guess "George" was "Pete"
//bands[0] is indexing the first element in the array and removing it **Guess Brian **corecct**
//bands[1][3]indexing second array[1] and replacing "Pete" with "Ringo" into the 4th index [3]

a	    b	    a && b
true	true	true
true	false	false
false	true	false
false	false	false

a	    b	    a || b
true	true	true
true	false	true
false	true	true
false	false	false

a	b	a != b
3	3	false//3 is equal to 3
1	5	true //1 is not equal to 5
2	"2"	true// 2 is not equal to string "2"

a	    b	    !a && (a OR b)
true	true	false //not true (false) && true OR true = false
true	false	false //not true (false) && true OR true = false
false	true	true //not false (true) && false OR true = true
false	false	false //not false (true) && false OR false = false

/*You're a bouncer at a bar. Given an age variable, 
create a conditional that satisfies the following requirements...

If a patron is older than 21, print out "Come on in!".
If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
If a patron is younger than 18, print out "You're too young to be in here!".
If a patron is older than 75, print out "Are you sure you want to be here?".
*/

var age = 45;
var ID = true;
if (ID === true){
if (age >=75){
    console.log("Are you sure you want to be here?");
} else if (age >=21 && age <=74){
    console.log("Come on in!")
} else if(age >= 18 && age <=20 ){
    console.log("Come on in (but no drinking)!");
} else {
    console.log("You're too young to be here");
}
} else {
    console.log('No ID, no entry');
}
/*
Bar patrons must have an ID if the bouncer is even 
going to consider what age they are.

If the patron has an ID, the bouncer will then check if 
they are of the proper age. If the patron does not have an ID, 
the bouncer will tell them "No ID, no entry."
Hint: Whether the patron has an ID or not can be stored in a has Id variable. 
What do you think the stored data type should be?
*/

/*Fizz-Buzz is a classic coding exercise that you can create 
using your knowledge of conditionals and loops. Implement code 
that does the following...

Counts from 1 to 100 and prints out something for each number.
If the number is divisible by 3, print "Fizz".
If the number is divisible by 5, print "Buzz".
If the number is divisible by both 3 and 5, print "FizzBuzz".
If the number does not meet any of the above conditions, just print the number.
*/

for (i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if (i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else{console.log(i);
    }
}      

//NEED HELP FINSIHING FUNCTION
var callNum = function(num){
    var array = [];//do i need an array and push something into the new array?
    for (i=1; i<=num; i++){//dont need to run through from 1 - 100 anymore. 
        //I want to put in any number i want in and get it printed
        if (i % 3 === 0 && i % 5 === 0){
            return("FizzBuzz")
        }else if (i % 3 === 0){
            return("Fizz")
        }else if (i % 5 === 0){
            return("Buzz")
        }else{console.log(i);
        }
    }     
    
callNum(3)

//want to call any number and spits out number, "fizz", "buzz", or "fizzbuzz"
