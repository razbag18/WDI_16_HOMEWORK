var colorSearchForm=$('form')
var userInput=$('.user-input')
var brushBox=$('.brush-box')
var results=$('.results')
var userMovieInput=$('.user-movie-input')
var movieForm=$('.movie-form')

function handleSubmit(event){
  event.preventDefault();
  
  color = userInput.val()
  $(".brush-box").css('background-color', color) 
  $(".square").mouseover(function(event){
    var color = userInput.val();
    event.target.style.background=color
  }) 
}

colorSearchForm.on('submit', handleSubmit);

for (i = 0; i < 1000; i ++){
  $('.results').append( "<div></div>" );
}

$('div').addClass("square");

// $(".results").css('background-color', ("green"))

function movieHandleSubmit(event){
  event.preventDefault();
  
  const options = {
    url: `http://omdbapi.com/?s=${ userMovieInput.val() }&apikey=2f6435d9`,
    method: 'get',
    dataType: 'json'
  }

  const showSearchResult = function(res){
    const movie = res.Search[0].Poster;
      $('.results').css('background-image', 'url(' + movie + ')')
  }
  
  $.ajax(options).done(showSearchResult)
}

movieForm.on('submit', movieHandleSubmit);