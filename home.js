// Re-useable function create

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)  // function parseInt thakle
    return inputFieldValueNumber;
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value     // function parseInt na thakle
    return inputFieldValue;
}

// function to get inner text
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}


// function to set inner text
function setInnerText (value){
    const avaiableBalanceElement = document.getElementById('avaiable-balance')
    avaiableBalanceElement.innerText = value
    
}



// add money btn section

document.getElementById('add-money-btn').addEventListener('click',function(e){
     e.preventDefault()
    //console.log('add money button connect')
    const pinNumber = 1234

    const bank = getInputValue ('bank')                        // function parseInt na thakle use
    const accountNumber = getInputValue('account-number')      // function parseInt na thakle use
    const amount = getInputValueNumber ('add-amount')          // function parseInt thakle use
    const pin = getInputValueNumber ('add-pin')                // function parseInt thakle use

    //console.log(bank, accountNumber,amount,pin);
      if(accountNumber.length < 11){
        alert('please vailid account number')
        return;
    }
    if(pin !== pinNumber){
        alert('input valid pin number')
        return;
    }
    const avaiableBalance = getInnerText ('avaiable-balance')   // function to get inner text use
    const totalNewBalance = amount + avaiableBalance
    //document.getElementById('avaiable-balance').innerText = totalNewBalance;

     setInnerText (totalNewBalance)              // set inner function
})



// Withdraw btn section

document.getElementById('withdraw-button').addEventListener('click',function(e){
    e.preventDefault()
    //console.log('withdraw button clicked')
    const securityPin = 12345
    
    const agentNumber =  getInputValue ('agent-number')             // function parseInt na thakle use
    const amount = getInputValueNumber('withdraw-amount')           // function parseInt thakle use
    const withdwawPin = getInputValueNumber('pin-number')           // function parseInt thakle use

    //console.log(agentNumber,amount,withdwawPin)
     if(agentNumber.length < 11){
        alert('please vailid agent number')
        return;
    }
    if(withdwawPin !== securityPin){
        alert('Input valid pin')
        return;
    }


    const avaiableBalance = getInnerText ('avaiable-balance')   // function to get inner text use
    const newTotalBalance = avaiableBalance - amount
    //console.log(totalBalance)
    //document.getElementById('avaiable-balance').innerText = newTotalBalance
    setInnerText (newTotalBalance)

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