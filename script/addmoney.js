document.getElementById("btn-add").addEventListener("click",function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value
   const convertAmount = parseInt(amount)
   
   const balanceAmount = document .getElementById("balance").innerText
   const convertblance = parseFloat(balanceAmount)

   const pin = document.getElementById("pin-namber").value
   const convertPin = parseFloat(pin)

   if(convertPin===1234){
    const sum = convertblance + convertAmount
    document .getElementById("balance").innerText = sum
    
   }
   
   else{
    console.log("this amount not taka")
   }
})