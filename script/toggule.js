document.getElementById("cash-box").style.display =" none"


document.getElementById("add-money").addEventListener("click",function(){

    document.getElementById("add-box").style.display = "block"
    document.getElementById("cash-box").style.display = "none"
})

document.getElementById("cash-money").addEventListener("click",function(){
  
    document.getElementById("add-box").style.display = "none"
    document.getElementById("cash-box").style.display = "block"

})