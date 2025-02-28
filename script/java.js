



document.getElementById("btn-login").addEventListener("click",function(event){
    event.preventDefault();
   const acountNamber = document.getElementById("Acount-namber").value
   
   const pinNamber = document.getElementById("pin-namber").value
   if(acountNamber.length===11){
   
    if(parseInt(pinNamber)===1234){
        window.location.href = "./main.html"
    }
    else{
        console.log("this not pin namber")
    }
   }
   else{
    console.log("this acount not current")
   }
})