var myJoke;

function joke() {
  myJoke =setTimeout(function(){ alert("Time to get a new car"); }, 2000);
}

/*
SET TIMEOUT FUNCTION
Syntax: setTimeout(function, milliseconds);
The first parameter is a function to be executed.
The second parameter indicates the number of milliseconds before execution.
If omitted, this defaults to 0.

setTimeout is a JavaScript function which calls a function or 
executes a code snippet after a specified delay (in milliseconds). 

This might be useful if, for example, you wished to display a popup 
after a visitor has been browsing your page for a certain amount of time, 
or you want a short delay before removing a hover effect from an element 
(in case the user accidentally moused out).



var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}


SET INTERVAL FUNCTION
Syntax: setInterval(function, milliseconds);
The setInterval() method repeats a given function at every given time-interval.
The first parameter is the function to be executed.
The second parameter indicates the length of the time-interval between each execution.
The setInterval() method will continue calling the function until clearInterval() is called,
 or the window is closed.
*/