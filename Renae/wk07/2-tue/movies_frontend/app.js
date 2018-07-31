function onSuccess(responseData) {
  console.log(responseData);
};

var searchForm = document.querySelector('form')
var userInput = document.querySelector('.submission_field')
searchForm.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.classList.contains('search-btn')){

    var options = {
      method: 'get',
      url: 'http://omdbapi.com/?apikey=2f6435d9&s=' + (userInput.value),
      dataType: 'json'
    }
  
  
    $.ajax(options).done(function(res) {
    
        
        res.Search.forEach(function(movie) {
  
          if (movie["Type"] === "movie") {
  
            // Find results section in DOM
            var results = document.querySelector('.results')

            // create paragraph element
            var paragraph = document.createElement('p')

            //create image element
            var image = document.createElement('img')

            //create anchor element
            var a = document.createElement('a')

            // append result title to paragraph
            paragraph.append(movie["Title"])
            
            //assign image.src as movie poster url
            image.src = (movie["Poster"]) 

            //<p><a href= movie["Title"]</a></p>

            // add result to paragraph, image and anchor
            results.append(paragraph, image, a)
          }
        })
      
        
    })
  
  }
})
