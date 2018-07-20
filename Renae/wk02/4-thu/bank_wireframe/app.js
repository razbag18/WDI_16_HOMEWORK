

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
  var actualWithdrawalRequest = Number(withdrawalRequest.value);// not defined??
  //var newBalance = totalSavings() - Number(document.querySelector('.enter-amount').value);
  var newBalance = totalSavings() - actualWithdrawalRequest;
  return Number(document.querySelector('.current-balance').textContent = newBalance);
}

document.querySelector('.withdraw').addEventListener('click', totalWithdrawals)

//CHECKING ACCOUNT DEPOSIT
var totalChecking = function(){
  var custInput = document.querySelector('.enter-amount-here');//point to enter amount input
  var actualCustInput = Number(custInput.value);//turning string into a number
  var currentBalance = Number(document.querySelector('.balance').textContent);
  var total = actualCustInput + currentBalance;
  return document.querySelector('.balance').textContent = total;
}

document.querySelector('.checking-deposit').addEventListener('click', totalChecking)

var savingsBalance = 0;

var savingsDeposit = function(amount) {
  savingsBalance = savingsBalance + amount;
}

var savingsWithdraw = function(amount){
  savingsBalance = savingsBalance - amount;
}
var savingsBalanceDiv = document.querySelector('div');

var updateSavingsBalance =function() {
  savingsBalanceDiv.textContent = '$ ' + savingsBalance;
}

updateSavingsBalance()