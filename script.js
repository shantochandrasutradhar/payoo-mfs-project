// loginButton functionality
document.getElementById('loginButton').addEventListener('click', function(event){
    event.preventDefault()
    //console.log('Login button clicked')
    //console.log(event)
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mobileNumbervalue = document.getElementById('mobile-number').value
    const mobileNumbervalueConverted = parseInt(mobileNumbervalue)

    const pinNumbervalue = document.getElementById('pin-number').value
    const pinNumbervalueConverted = parseInt(pinNumbervalue)

    //console.log(mobileNumbervalueConverted,pinNumbervalueConverted)

    if(mobileNumbervalueConverted === mobileNumber && pinNumbervalueConverted === pinNumber){
        //console.log('Valid Info')
        window.location.href="./home.html"
    }
    else{
        //console.log('Invalid Info')
        alert("Invalid credentials")
    }

})