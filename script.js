
  
 let zekerNums = document.getElementById("max-counter").innerHTML;
 let tasbeh = document.getElementById("counter").innerHTML;
document.getElementById("counter-down").addEventListener("click", function () {
   
    while(tasbeh >0){
        tasbeh -=1;
        document.getElementById("counter").innerHTML = tasbeh; 
    }
});

document.getElementById("reloading").addEventListener("click",function(){

    document.getElementById("counter").innerHTML = zekerNums;
});