//Even Odd Reporter

for (var i=0; i<=20; i++){
if (i % 2 === 0){
    console.log(i + ' is even.');
} else {
    console.log(i +' is odd.');
}

}

//Multiplication Tables
var multiplier = 9;
for (var i=1; i<=10; i++){
var result = multiplier*i;
console.log( multiplier + ' * ' + i + ' = ' + result);
}

//Top Choices
var faveColours = ["pink", "green", "red", "orange"];
var fLen = faveColours.length;
for (var i = 0; i < fLen; i++){
    console.log("My number " + (i+1) + " choice is " + faveColours[i] + '.');
}


