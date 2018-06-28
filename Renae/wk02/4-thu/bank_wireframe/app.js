

var totalSavings = function(){
  var custInput = document.querySelector('.enter-amount');//point to enter amount input
  var actualCustInput = Number(custInput.value);//turning string into a number
  var currentBalance = Number(document.querySelector('.current-balance').textContent);
  var total = actualCustInput + currentBalance;
  return document.querySelector('.current-balance').textContent = total;
}

document.querySelector('.deposit').addEventListener('click', totalSavings)

//can't work out where im going wrong, 
var totalWithdrawals = function(){
  var withdrawalRequest = document.querySelector('.enter-amount').value;
  var actualWithdrawalRequest = Number(withdrawalRequest);//why grey?
  newBalance = totalSavings() - Number(document.querySelector('.enter-amount').value);
  return Number(document.querySelector('.current-balance').textContent = newBalance);
}

document.querySelector('.withdraw').addEventListener('click', totalWithdrawals)

//when call totalChecking in console, it logs but i can't input it
var totalChecking = function(){
  var custInput = document.querySelector('.enter-amount-here');//point to enter amount input
  var actualCustInput = Number(custInput.value);//turning string into a number
  var currentBalance = Number(document.querySelector('.balance').textContent);
  var total = actualCustInput + currentBalance;
  return document.querySelector('.balance').textContent = total;
}

document.querySelector('.checking-deposit').addEventListener('click', totalChecking)