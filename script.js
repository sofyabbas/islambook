
// let zekerNums = document.getElementById("max-counter").innerHTML;

// document.getElementById("counter-down").addEventListener("click", function () {
//     if (parseInt(document.getElementById("counter").innerHTML) > 0) {
//         let tasbeh = document.getElementById("counter").innerHTML;
//         tasbeh -= 1;
//         document.getElementById("counter").innerHTML = "0" + tasbeh;
//         document.getElementById(counter-down).style.backgroundColor = '#3498db';
//         alert("done");
//     }
//     // if (document.getElementById("counter").innerHTML === "00") {

//     // }
// },1000);

// //resetting counter 
// document.getElementById("reloading").addEventListener("click", function (event) {
//     //the following code to stop triggering click on div
//     event.stopPropagation();
//     document.getElementById("counter").innerHTML = zekerNums;
// },1000);

document.querySelectorAll(".counters").forEach(div => {
    div.addEventListener("click", function () {
  alert("Hello");
    })
});