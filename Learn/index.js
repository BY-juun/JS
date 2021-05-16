
var num1 = Math.ceil(Math.random()*9);
var num2 = Math.ceil(Math.random()*9);
var answer = num1 * num2;
var pro = document.getElementById("problem");
pro.textContent = "문제 " + String(num1) + " X " +  String(num2);
var input = document.querySelector("input");
var result = document.getElementById("result");
var fo = document.getElementById("Is_correct");

fo.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(Number(input.value) === answer)
    {
        input.value = "";
        result.textContent = "딩동댕";
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        answer = num1 * num2;
        pro.textContent = "문제 " + String(num1) + " * " +  String(num2);
    }
    else
    {
        result.textContent  = "땡";
        input.value = "";
    }
    input.focus();
});