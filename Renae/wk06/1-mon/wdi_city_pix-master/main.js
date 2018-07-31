
var cities = ["NYC", "SF", "LA", "SYD", "ATX" ]

cities.forEach(function(city) {
  var x = document.getElementById('city-type')
  var option = document.createElement('option')
  option.text = (city)
  x.add(option)
})

document.addEventListener('change', function(event){
  background = document.querySelector('body')
  if (event.target.value === "NYC") {
    background.className = 'nyc'
  }
  else if (event.target.value === "SF") {
    background.className = 'sf'
  }
  else if (event.target.value === "LA") {
    background.className = 'la'
  }
  else if (event.target.value === "SYD") {
    background.className = 'sydney'
  }
  else if (event.target.value === "ATX"){
  background.className = 'austin'
  } else background.className = ''
})
