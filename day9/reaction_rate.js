//Call stack 복습, class list부분 복습.

var 스크린 = document.querySelector("#screen");
var 시작시간;
var 끝시간
var record = [];
var time_out;
스크린.addEventListener("click",function(){ //스크린 클릭
    
    if(스크린.classList.contains("waiting")) //화면이 현재 대기상태라면
    {
        //waiting화면에서 ready화면으로 전환
        스크린.classList.remove("waiting"); 
        스크린.classList.add("ready");
        스크린.textContent = "초록색이 되면 클릭하세요";
        time_out = setTimeout(function(){
            시작시간 = new Date();
            스크린.click();
        } ,Math.floor(Math.random()*1000)+2000);
    }
    else if(스크린.classList.contains("ready"))
    {
        if(!시작시간) //부정출발 체크
        {
            clearTimeout(time_out);
            스크린.classList.remove("ready"); 
            스크린.classList.add("waiting");
            스크린.textContent = "너무 성급하시군요!";
        }
        else
        {
            스크린.classList.remove("ready"); 
            스크린.classList.add("now");
            스크린.textContent = "클릭하세요!";
        }
    }
    else if(스크린.classList.contains("now"))
    {
        끝시간 = new Date();
        console.log("반응속도 " + (끝시간 - 시작시간) + " ms");
        record.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null;
        스크린.classList.remove("now"); 
        스크린.classList.add("waiting");
        스크린.textContent = "클릭해서 시작하세요";
    }
});