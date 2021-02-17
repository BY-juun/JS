
var image_position = 0;
var RCS = {
    바위 : "0",
    가위 : "-142px",
    보 : "-284px"
};

function computer_choice(image_position){
    return Object.entries(RCS).find(function(v){
        return v[1] === image_position;
    })[0];
}

var interval;

function interval_maker() {
    interval = setInterval(function() {
    if(image_position === RCS.바위){
        image_position = RCS.가위;
    }else if(image_position === RCS.가위){
        image_position = RCS.보;
    }else{ 
        image_position = RCS.바위;
    }
    document.getElementById("computer").style.background = 
    "url(https://en.pimg.jp/023/182/267/1/23182267.jpg)" + image_position + " 0";   
    },100);
}
interval_maker();

var score_table = {
    가위 : 1,
    바위 : 0,
    보 : -1,
};

document.querySelectorAll(".btn").forEach(function(btn){
    btn.addEventListener("click",function(){
        clearInterval(interval);
        setTimeout(function(){
            interval_maker();
        }, 1000);
        var my_choice = this.textContent;
        console.log(my_choice, computer_choice(image_position));
        var score_diff = score_table[my_choice] - score_table[computer_choice(image_position)];
        if(score_diff === 0)
        {
            console.log("비겼습니다...");
        }
        else if([-1,2].includes(score_diff))
        {
            console.log("이겼습니다!");
        }
        else
        {
            console.log("졌습니다 ㅠㅠ");
        }
        
    });
});

