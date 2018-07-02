
//SAVINGS
var savingsBalance = 0;
var amount = (document.querySelector('.enter-amount'));

var deposit = function() {
  savingsBalance = savingsBalance + Number(amount.value);
  if (savingsBalance > 0){
    document.querySelector('.savings').style.backgroundColor = "#f16530";
  }
    document.querySelector('.balance-div').textContent = '$' + savingsBalance.toFixed(2);
}

document.querySelector('.deposit-btn').addEventListener('click', deposit);

var withdraw = function(){
  savingsBalance = savingsBalance - Number(amount.value);
  if (savingsBalance < 0){
    alert("You don't have enough money to withdraw that amount.")
    } else {
      document.querySelector('.balance-div').textContent = '$' + savingsBalance.toFixed(2); 
  }
  
}

document.querySelector('.withdraw-btn').addEventListener('click', withdraw);


//CHEQUE
var chequeBalance = 0;
var chequeAmount = (document.querySelector('.cheque-enter-amount'))


var chequeDeposit = function() {
  chequeBalance = chequeBalance + Number(chequeAmount.value);
  if (chequeBalance > 0){
    document.querySelector('.cheque').style.backgroundColor = "#fdf035";
  }
  document.querySelector('.cheque-balance-div').textContent = '$' + chequeBalance.toFixed(2);
}

document.querySelector('.cheque-deposit-btn').addEventListener('click', chequeDeposit);

var chequeWithdraw = function(){
  chequeBalance = chequeBalance - Number(chequeAmount.value);
  if (chequeBalance <0){
    alert("You don't have enough money to withdraw that amount.")
    } else{document.querySelector('.cheque-balance-div').textContent = '$' + chequeBalance.toFixed(2);
  }
  
}
  
document.querySelector('.cheque-withdraw-btn').addEventListener('click', chequeWithdraw);
























// var updateBalance = function() {
//   balanceDiv.textContent = '$ ' + balance;
// }

// updateBalance()

// var balanceDiv = document.querySelector('.balance-div');







// var totalSavings = function(){
//   var custInput = document.querySelector('.enter-amount');//point to enter amount input
//   var actualCustInput = Number(custInput.value);//turning string into a number
//   var currentBalance = Number(document.querySelector('.balance-div').textContent);
//   var total = actualCustInput + currentBalance;
//   return document.querySelector('.balance-div').textContent = total;
// }

// document.querySelector('.deposit').addEventListener('click', totalSavings)

