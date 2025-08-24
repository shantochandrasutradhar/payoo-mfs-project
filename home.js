// add money btn section

document.getElementById('add-money-btn').addEventListener('click',function(e){
     e.preventDefault()
    //console.log('add money button connect')
    const pinNumber = 1234
    const bank = document.getElementById('bank').value 
    const accountNumber = document.getElementById('account-number').value 
    const amount = parseInt( document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('add-pin').value)
    //console.log(bank, accountNumber,amount,pin);
      if(accountNumber.length < 11){
        alert('please vailid account number')
        return;
    }
    if(pin !== pinNumber){
        alert('input valid pin number')
        return;
    }
    const avaiableBalance = parseInt(document.getElementById('avaiable-balance').innerText)
    const totalNewBalance = amount + avaiableBalance
    document.getElementById('avaiable-balance').innerText = totalNewBalance;
})



// withdraw btn section

document.getElementById('withdraw-button').addEventListener('click',function(e){
    e.preventDefault()
    //console.log('withdraw button clicked')
    const securityPin = 12345
    const agentNumber = document.getElementById('agent-number').value
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const withdwawPin = parseInt(document.getElementById('pin-number').value)
    //console.log(agentNumber,amount,withdwawPin)
     if(agentNumber.length < 11){
        alert('please vailid account number')
        return;
    }
    if(withdwawPin !== securityPin){
        alert('Input valid pin')
        return;
    }


    const avaiableBalance = parseInt(document.getElementById('avaiable-balance').innerText)
    const newTotalBalance = avaiableBalance - amount
    //console.log(totalBalance)
    document.getElementById('avaiable-balance').innerText = newTotalBalance


})






// toggle features section here

// for addmoney
document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    
})
// for cashout 
document.getElementById('cashout-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('add-money-parent').style.display = 'none'
    
})