//pop, push, shift, unshift, splic, join, indexof 복습

var Body = document.body;

var arr = [];
var candidate_num = [1,2,3,4,5,6,7,8,9];
var pop_num;

function make_random_num(){
    arr = [];
    candidate_num = [1,2,3,4,5,6,7,8,9];
    for(var i=0;i<4;i++)
    {
        pop_num = candidate_num.splice(Math.ceil(Math.random()*(9-i))-1,1)[0];
        arr.push(pop_num);
    }
}

make_random_num();

var result = document.createElement('h1');
Body.append(result);

var fo = document.createElement("form");
Body.append(fo);

var inputword = document.createElement('input');
inputword.maxLength=4; 
fo.append(inputword);


var btn = document.createElement('button');
btn.textContent = '입력!'
fo.append(btn);

var fail = 0;

fo.addEventListener('submit',function asynchronus(e){
    e.preventDefault();
    var answer = inputword.value;
    
    if(answer === arr.join("")) //답이 맞음. >> 홈런!
    {
        result.textContent = "HomeRun";
        fail = 0;
        make_random_num();
    }
    else // 답이틀림.
    {
        fail++;
        var result_arr = answer.split("");
        var strike = 0;
        var ball = 0;
        for(var i = 0; i < 4; i++)
        {
            if(Number(result_arr[i]) === arr[i]) //같은자리인지 확인
            {
                strike++;
            }
            else if(arr.indexOf(Number(result_arr[i])) > -1) //자리는 다르지만 숫자가 같은지 확인
            {
                ball++;
            }
        }
        if(fail >= 10)
        {
            result.textContent = "Fail over 10 Result is " + arr.join("");
            fail = 0;
            make_random_num();
        }
        else
        {
            result.textContent = strike + " strike , " + ball + " ball " + "\n" + (10-fail) + " chance is left";
        }
    }
    inputword.value = "";
    inputword.focus();
})
