var recipe = {
    name: 'Midnight Speedster',
    serves: 1,
    ingredients: ['packet of instant noodle', 'water', 'chilli powder'],
}

console.log(recipe.name);
console.log(recipe.ingredients.join(' '));
console.log(recipe.ingredients.join(' - '));
console.log(recipe.ingredients.join('\n'));
console.table(recipe)

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
if(readingList[j].alreadyRead)//boolean already true, so dont need to compare it
{
    console.log("You've already read " + readingList[j].bookTitle);
} 
else{
    console.log('You still need to read ' + readingList[j].bookTitle);
    }
}

var film = {
    title: 'sharknado',
    duration: 100,
    stars: ['sharks', 'that guy from 90210']
}

var movieInfo = function(movie) { //defined parameter within the function
    return movie.title + ' lasts for  ' + movie.duration + ' minutes. Stars ' + movie.stars.join(', '); 
}
console.log ( movieInfo(film) );