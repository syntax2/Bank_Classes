const depositdiv = document.getElementById('deposit')
const withdrawdiv = document.getElementById('withdraw')
const balancediv = document.getElementById('balance')

class Bank{
   constructor(balance){
     this.balance =  balance
   }
   Deposit_money(amount){
    this.balance += amount
     console.log('deposited',`$${amount}`)
     console.log({balance: this.balance})
   }
  Withdraw_money(amount){
    if (amount < this.balance){
    this.balance -=amount
    console.log('withdraw',`$${amount}`)
    console.log({balance: this.balance})
    }else{
      console.log('you dont have enough money')
    }
  }
 
  }

const Ashish = new Bank(10)
Ashish.Deposit_money(100)
Ashish.Withdraw_money(200)
const amountdiv = document.getElementById('amount')
depositdiv.onclick = Ashish.Withdraw_money