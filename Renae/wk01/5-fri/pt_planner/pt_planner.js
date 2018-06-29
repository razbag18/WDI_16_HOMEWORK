

//Incorporating all lines

var trainLines = [
    ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'], 
    ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'],
    ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
];
//origin alameinLine
var origin = 'Flinders Street';  
var destination = 'Windsor'
var indexOrigin1 = trainLines[0].indexOf(origin);
var changeOver =trainLines[0].indexOf("Richmond");
var startOfJourney = trainLines[0].slice(indexOrigin1, changeOver); 

//destination on sandyLine
var indexDestination = trainLines[1].indexOf(destination);
var changeOver1 = trainLines[1].indexOf("Richmond");
var endOfJourney = trainLines[1].slice(changeOver1, indexDestination +1);
var completeJourney = startOfJourney.concat(endOfJourney);
var journeyBackwards1 = startOfJourney.concat(endOfJourney).reverse();

console.log("origin: " + origin + '\n' + 'destination: ' + destination);
if (indexOrigin1 > indexDestination){
    console.log(completeJourney.join(' ----> '))
    } else console.log(completeJourney.join(' -----> '))
//need to work on backwards now
if (indexOrigin1 > indexDestination){
    console.log(journeyBackwards.length -1 + " stops total")
    } else console.log(completeJourney.length -1 + " stops total")

for (i=0; i<trainLines.length; i++){//cycle through trainLines
    if (origin ===  trainLines[0] ){
    }//if origin is in the first array, stop looping
        else(//keep looping)


/*

//START OF WORKING INDIVIDUAL TRAIN CODE


var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var origin = 'Burnley';
var desination = 'Flinders Street';
//var origin = prompt("Starting destination");
//var desination = prompt("Destination");
var indexOrigin = alameinLine.indexOf(origin);
var indexDestination =alameinLine.indexOf(destination);
var journey = alameinLine.slice(indexOrigin, indexDestination +1); 
var journeyBackwards = alameinLine.slice(indexDestination, indexOrigin +1).reverse();



console.log("origin: " + origin + '\n' + 'destination: ' + destination);
//console.log(journey.join(' ---> '));

if (indexOrigin > indexDestination){
    console.log(journeyBackwards.join(' ----> '))
    } else console.log(journey.join(' -----> '))

if (indexOrigin > indexDestination){
    console.log(journeyBackwards.length -1 + " stops total")
    } else console.log(journey.length -1 + " stops total")

END OF WORKING INDIVIDUAL TRAIN CODE

var trainLines = {
    alameinLine : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
    sandringhamLine : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'],
    glenWaverleyLine : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
}


//use golf game//

var indexOrigin = line.indexOf(origin);
var indexDestination = line.indexOf(desination);
var journey = line.slice(indexOrigin, indexDestination +1); 
var journeyBackwards = line.slice(indexDestination, indexOrigin +1).reverse();




*/




/*



var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'];
var origin = ;
var destination = ;
console.log("origin: " + origin+ '\n' + 'destination: ' + desination);
console.log(sandringhamLine.slice(0,2).join(' ----> '));
console.log((sandringhamLine.slice(0, 1).length)+ " stops total");

var glenWaverleyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var origin = glenWaverleyLine[0];
var desination = glenWaverleyLine[3];
console.log("origin: " + origin+ '\n' + 'destination: ' + desination);
console.log(glenWaverleyLine.slice(0,4).join(' ----> '));
console.log((glenWaverleyLine.slice(0, 3).length)+ " stops total");




for (i=0; i<alameinLine.length; i++){//cycle through the alameinLine
    (console.log(i));
}




//findIndex()


/*
var origin = [alameinLine[3]];
var destination = [alameinLine.indexof(1)];


if (origin = alameinLine[3]){
console.log(alameinLine.indexOf(3) - alameinLine.indexOf(1));

}

//want to use the values inside the array to calculate stops from one index to other. Is this correct way?

for (i=0; i<sandringhamLine.length; i++){
    if (origin = sandringhamLine[0]){
        console.log(origin);
    }
}


//
var glenWaverleyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var origin = glenWaverleyLine[0];
var destination = glenWaverleyLine[4];
//var stattionIndex = [];
//for (var i = 0; i<glenWaverleyLine.length; i++){
    
    //stattionIndex.push(glenWaverleyLine.indexOf('Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'));

console.log(origin +' to ' + destination + ' is ' + (glenWaverleyLine.indexOf('Kooyong') - glenWaverleyLine.indexOf('Flagstaff')) + ' stops');

    //console.log(i)

debugger
//if desination is 'flagstaff amd orgin is parliament, find the length between stops



/*
var origin = prompt('Where are you starting from?');
var destination = prompt('Where would you like to go?');

while(origin !== sandringhamLine[i] || origin !== alameinLine[i] || origin !== glenWaverleyLine[i]) {
    console.log('Please enter valid origin');

}
debugger




/*var origin = prompt('Where are you starting from?');

while(origin !== 'Flagstaff' || origin !== 'Melbourne Central' || origin !== 'Parliament' || origin !== 'Richmond' || origin !== 'Kooyong' || origin !== 'Tooronga') {
    console.log('Please enter valid origin');
}
debugger
 





var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'];
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverleyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];

var origin = [];
var destination = [];

console.log(sandringhamLine.length - sandringhamLine.indexOf[0]);

var findNumStops = function(stop1, stop2){
    if(//somthing){}

//}
 
findNumStops()

*/

