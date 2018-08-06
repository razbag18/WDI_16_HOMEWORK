var colorSearchForm=$('form')
var userInput=$('.user-input')
var brushBox=$('.brush-box')

function handleSubmit(event){
  event.preventDefault();
  color = userInput.val()
  $(".brush-box").css('background-color', color) 
  $(".square").click(function(event){
    var color = userInput.val();
    event.target.style.background= color
  
  }) 
}

colorSearchForm.on('submit', handleSubmit);

for (i = 0; i < 1000; i ++){
  $('.results').append( "<div></div>" );
}

$('div').addClass("square");




