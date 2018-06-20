
//creating variables for fortune 
var numChildren = 3;
var partnersName = 'Henry';
var geoLocal = 'El Salvador';
var jobTitle = 'Street Sweeper';

console.log('You will be a ' + jobTitle + ' in ' + geoLocal + ' and married to ' + partnersName + ' with ' + numChildren + ' kids.');

//Age Calculator
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = 1986

console.log('They are either ' + (currentYear - birthYear) + ' or ' + (currentYear - birthYear -1));


//Lifetime Supply Calculator

var currentAge = 32;
var maxAge = 101;
var amountPerDay = 2;

console.log('You will need ' + ((365*amountPerDay)*maxAge-currentAge) + ' to last you the ripe old age of ' + maxAge);