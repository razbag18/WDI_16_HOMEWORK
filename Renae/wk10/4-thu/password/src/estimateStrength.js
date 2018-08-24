

var estimateStrength = function(pwd) {
  var results = { score: 1 }

  var hasLowerCase = pwd.split('').some(function(letter) {
    return letter === letter.toLowerCase()
  })
  if (hasLowerCase) {
    results["hasLowerCase"] = hasLowerCase
  }
  
  var hasUpperCase = pwd.split('').some(function(letter) {
    return letter === letter.toUpperCase()
  })
  if (hasUpperCase) {
    results["hasUpperCase"] = hasUpperCase
  }

  return results
}

module.exports = estimateStrength