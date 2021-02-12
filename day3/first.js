var Body = document.body;
var word = document.createElement('div');
word.textContent = '안병준'
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
    if(inputword.value[0] === word.textContent[word.textContent.length-1])
    {
        result.textContent = "딩동댕";
        word.textContent = inputword.value;
    }
    else
    {   
        result.textContent = "땡";
    }
    inputword.value = "";
    inputword.focus();
})


//var word = "안병준";
/*while(true)
{
    var answer = prompt(word);
    if(answer === "stop")
        break;
    if(answer[0] === word[word.length-1])
    {
        alert("딩동댕");
        word = answer;    
    }
    else
    {
        alert("땡");
    }
}*/