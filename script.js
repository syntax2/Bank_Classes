const depositdiv = document.getElementById('deposit')
const withdrawdiv = document.getElementById('withdraw')
const balancediv = document.getElementById('balance')

class Bank{
   constructor(name,age){
     this.Deposit = Deposit
     this.name = name
     this.Withdraw = Withdraw
     this.Balance =  Balance
   }
   // Deposit_money(){
    // const submit  =  depositdiv.innerText
  //    return submit
  //  }
  // Withdraw_money(){
    // const get = withdrawdiv.innerText
  //   return get
  // }
  Final_balance(submit,get){
    const submit  =  depositdiv.innerText
    const get = withdrawdiv.innerText
    console.log(submit)
    // if (get > submit){
    //   console.log('this is an error message')
    // }
    // else  {
    //   money = balancediv.onclick(result => submit- get)
    //   console.log(result)
    //    }
    }
  }


const Ramesh = new Bank()