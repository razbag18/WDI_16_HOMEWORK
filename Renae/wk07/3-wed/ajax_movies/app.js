//iife -- immediately invoke function expression
//wraps whole program in a function so all of your global variables are now local to your function


  var searchForm = $('.search-form');
  var searchBar = $('.search-bar');
  var resultsDiv = $('.results');

  //handle submit event is associated with the search form event listener
  function handleSubmit(event) {
    
    event.preventDefault();
    //stops button submitting to server

    const options = {
      url: `http://omdbapi.com/?s=${ (searchBar).val() }&apikey=2f6435d9`,
      //back tick `` instead of quotes for intripolation
      method: 'get',
      dataType: 'json'
    }

    const showSearchResults = function(res){

      const movies = res.Search;
      $(movies).each(function(index, movie){
        var paraElem = $('<p>');
        $(paraElem).text(movie.Title);
        $(resultsDiv).append( paraElem );
      })
    }

    //send a request to OMDB API
    $.ajax(options).done(showSearchResults)

  }

  searchForm.on('submit', handleSubmit);

