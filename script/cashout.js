document.getElementById("btn-out").addEventListener("click",function(event){

    event.preventDefault();

    const cashAmount = document.getElementById("cash-amount").value
    const convertCash = parseFloat(cashAmount)


    const balance = document.getElementById("balance").innerText
    const convertBlance = parseFloat(balance)


    const pin = document.getElementById("pin-namber").value
    const convertpin = parseFloat(pin)

    if(convertpin===1234){

        const substrak = convertBlance - convertCash 
        document.getElementById("balance").innerText = substrak
    }
    else {
        console.log("pin number tik nai")
    }
    
})