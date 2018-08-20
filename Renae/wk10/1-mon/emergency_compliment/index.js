const express = require('express')
const _ = require('lodash')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var randomCompliment = _.sample(compliments)
var randomColor = _.sample(colors)


app.get('/', (req, res) => {

  res.render('index', {randomCompliment, randomColor})
})

app.get('/:name', (req, res) => {
  const name = req.params.name
 
  res.render('name', {randomCompliment, randomColor, name})
})

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`)
})