var num1 = Math.ceil(Math.random()*9);
var num2 = Math.ceil(Math.random()*9);
var multiply_result = num1 * num2;

var Body = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + " 곱하기 " + String(num2) + "는?";
document.body.append(word);

var fo = document.createElement("form");
document.body.append(fo);

var inputword = document.createElement('input');
fo.append(inputword);

var btn = document.createElement('button');
btn.textContent = '입력!'
fo.append(btn);

var result = document.createElement('div');
document.body.append(result);

fo.addEventListener('submit',function(e){
    e.preventDefault();
    if(multiply_result === Number(inputword.value))
    {
        result.textContent = "딩동댕";
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        multiply_result = num1 * num2;
        word.textContent = String(num1) + " 곱하기 " + String(num2) + "는?";
    }
    else
    {   
        result.textContent = "땡";
    }
    inputword.value = "";
    inputword.focus();
})

