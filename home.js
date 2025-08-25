// Re-useable function create

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)  //parseInt thakle
    return inputFieldValueNumber;
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value     // parseInt na thakle
    return inputFieldValue;
}


// add money btn section

document.getElementById('add-money-btn').addEventListener('click',function(e){
     e.preventDefault()
    //console.log('add money button connect')
    const pinNumber = 1234
    
    const bank = getInputValue ('bank') 
    const accountNumber = getInputValue('account-number')
    const amount = getInputValueNumber ('add-amount')
    const pin = getInputValueNumber ('add-pin')

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
    
    const agentNumber =  getInputValue ('agent-number')
    const amount = getInputValueNumber('withdraw-amount')
    const withdwawPin = getInputValueNumber('pin-number')

    //console.log(agentNumber,amount,withdwawPin)
     if(agentNumber.length < 11){
        alert('please vailid agent number')
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




// Toggle features section here

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