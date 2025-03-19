let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

function add(){
let result= Number(num1.value)+Number(num2.value);
document.getElementById("result").textContent=result;
}
function sub(){
let result= Number(num1.value)-Number(num2.value);
document.getElementById("result").textContent=result;
}
function mul(){
let result= Number(num1.value)*Number(num2.value);
document.getElementById("result").textContent=result;
}
function div(){
let result= Number(num1.value)/Number(num2.value);
document.getElementById("result").textContent=result;
}


