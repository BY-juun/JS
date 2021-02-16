var Body = document.body;
var fo = document.createElement("form");
Body.append(fo);

var user_input = document.getElementById("user_input");
fo.append(user_input);

var btn = document.createElement("button");
btn.textContent = "입력!";
fo.append(btn);

var warning = document.createElement("div");
Body.append(warning);

var count = 0;
var user_lotto = [];

var lotto_count = 0;

fo.addEventListener("submit",function(e){
    e.preventDefault();
    if(count > 6)
    {
        warning.textContent = "입력 가능한 범위를 초과하셨습니다.";
    }
    user_lotto[count] = user_input.value;    
    count++;
    user_lotto.sort(function(p,c){return p-c;});
    user_input.value="";
    user_input.focus();
});


var candidate_num = Array(45).fill().map(function (element, index){
    return index+1;
})

var shuffle = [];
while(candidate_num.length > 0)
{
    var temp = candidate_num.splice(Math.floor(Math.random()*candidate_num.length) , 1);
    shuffle.push(temp);
}

var bonus = shuffle[shuffle.length - 1];
var lottery_num = shuffle
.slice(0,6)
.sort(function(p,c){return p-c;});



console.log("lotto_count " + lotto_count);
var result_window = document.getElementById("결과창");

function colored_ball(num,result_window){
    var ball = document.createElement("div");
    ball.textContent = num;
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    ball.style.marginRight = "10px";
    ball.style.fontSize = "12px";
    ball.style.marginBottom = "10px";
    var background_color;
    if(num<=10){
        background_color = "red";
    }else if(num<=20){
        background_color = "orange";
    }else if(num<=30){
        background_color = "yellow";
    }else if(num<=40){
        background_color = "blue";
    }else{
        background_color = "green";
    }
    ball.style.backgroundColor = background_color;
    result_window.appendChild(ball);
}
setTimeout(function(){
    colored_ball(lottery_num[0],result_window);
},1000);

setTimeout(function(){
    colored_ball(lottery_num[1],result_window);
},2000);

setTimeout(function(){
    colored_ball(lottery_num[2],result_window);
},3000);

setTimeout(function(){
    colored_ball(lottery_num[3],result_window);
},4000);

setTimeout(function(){
    colored_ball(lottery_num[4],result_window);
},5000);

setTimeout(function(){
    colored_ball(lottery_num[5],result_window);
},6000);

setTimeout(function(){
    var bonus_block = document.getElementsByClassName("bonus_num")[0];
    colored_ball(bonus,bonus_block);
},7000);

