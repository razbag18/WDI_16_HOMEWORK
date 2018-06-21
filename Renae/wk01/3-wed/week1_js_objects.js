var faveRecipe = {
    title: 'Minestrone Soup',
    servings: 4,
    ingredients: ['canned tomatoes', 'pasta', 'chilli', 'vegetables']
    }

console.log(faveRecipe.title);
console.log('Serves: ' + faveRecipe.servings);
console.log('Ingredients: ');
for (var i=0; i<faveRecipe.ingredients.length; i++){
    console.log (faveRecipe.ingredients[i]);
    }



/*Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has 
properties for the title (a string), author (a string), and already 
Read (a boolean indicating if you read it yet).
*/
var readingList = [
    {
        bookTitle: 'Lord of the Rings',
        bookAuthor: 'J.R.R. Tolkien',
        alreadyRead: true
    },
    {
        bookTitle: 'IT',
        bookAuthor: 'Stephen King ',
        alreadyRead: true
    },
    {
        bookTitle: "I'll Be Gone In The Dark",
        bookAuthor: 'Michelle McNamara',
        alreadyRead: false
    }
]
//Iterate through the array of books
for (var j=0; j<readingList.length; j++){
    console.log(readingList[j].bookTitle + ' by ' + readingList[j].bookAuthor);

//Use an if/else statement to change the output depending on 
//whether youve read it yet or not 
if(readingList[j].alreadyRead === true){
    console.log("You've already read " + readingList[j].bookTitle);
} 
else{
    console.log('You still need to read ' + readingList[j].bookTitle);
    }
}


/*Create an object to store the following information about 
your favorite movie: title (a string), duration (a number), 
and stars (an array of strings).

Create a function to print out the movie information like 
so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, 
Jackie, Living Sneezes."
*/

var faveMovie = {
    title: 'The Room',
    duration: 99 + ' minutes',
    stars: ['Tommy Wiseau', ' Greg Sestero', ' Juliette Danielle', ' Phillip Haldiman']
}
console.log(faveMovie.title + ' runs for ' + faveMovie.duration + '. Stars: ' + faveMovie.stars)


