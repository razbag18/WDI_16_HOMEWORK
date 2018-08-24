var prompt = require('prompt')

prompt.start()

class BankAccount {

  constructor(balance = 0, accountType){
    this.bal = balance
    this.accType = accountType
    this.transHist = []
  }

  withdraw(num){
    this.transHist.push(["withdraw: " + num])
    this.bal -= num
  }

  deposit(num){
    this.transHist.push(["deposit: " + num])
    this.bal += num
  }

  showBalance(){
    return this.bal
  }
  
}

// accountType = prompt.get(accountType, function(err, result){
//   console.log('account type:' + result.accountType)
// })
let acc = new BankAccount()

acc.withdraw(20)
acc.deposit(70)

console.log(acc.showBalance())
console.log(acc.transHist)


// var total = 0
// transHistory.forEach(transaction => {
//   if (transaction[0] === "deposit") {
//     total += transaction[1]
//   } else {
//     total -= transaction[1]
//   }
// })

// console.log(total)