//정적스코핑 , 클로저, 비동기 . 화면에 표시되는것과 data의 일치
//call함수, Array.prototype

var tbody = document.querySelector("#table tbody");
tbody.style.textAlign = "center";
var dataset = [];

document.querySelector("#exec").addEventListener("click",function(){
    tbody.innerHTML ="";
    var hor = parseInt(document.querySelector("#hor").value);
    var ver = parseInt(document.querySelector("#ver").value);
    var mine = parseInt(document.querySelector("#mine").value);

    var candidate_num = Array(hor*ver)
    .fill().map(function (element, index){
        return index;
    });
    //지뢰위치뽑기
    var shuffle = [];
    while(candidate_num.length > 80)
    {
        var temp = candidate_num.splice(Math.floor(Math.random()*candidate_num.length) , 1);
        shuffle.push(temp);
    }
    //지뢰테이블만들기
    for(var i=0;i<ver;i++)
    {
        var arr =[];
        dataset.push(arr);
        var tr = document.createElement("tr");
        for(var j=0;j<hor;j++)
        {
            arr.push(1);
            var td = document.createElement("td");
            //td 만들자마자 각 td에 eventlistener를 만들어줌.
            td.addEventListener("contextmenu",function(e){
                e.preventDefault();
                var parent_tr = e.currentTarget.parentNode;
                var parent_tbody = e.currentTarget.parentNode.parentNode;
                var block = Array.prototype.indexOf.call(parent_tr.children,e.currentTarget);
                var line = Array.prototype.indexOf.call(parent_tbody.children,parent_tr);
                if(e.currentTarget.textContent === "" || e.currentTarget.textContent === "X")
                {
                    e.currentTarget.textContent = "!";
                }
                else if (e.currentTarget.textContent === "!")
                {
                    e.currentTarget.textContent = "?";
                }
                else if(e.currentTarget.textContent === "?")
                {
                    if(dataset[line][block] === 1)
                    {
                        e.currentTarget.textContent = "";
                    }
                    else if(dataset[line][block] === "X")
                    {
                        e.currentTarget.textContent = "X";
                    }
                    
                }
            });
            td.addEventListener("click",function(e){
                var parent_tr = e.currentTarget.parentNode;
                var parent_tbody = e.currentTarget.parentNode.parentNode;
                var block = Array.prototype.indexOf.call(parent_tr.children,e.currentTarget);
                var line = Array.prototype.indexOf.call(parent_tbody.children,parent_tr);
                if(dataset[line][block] === "X")
                {
                    e.currentTarget.textContent = "펑";
                }
                else
                {
                    var around = [
                        dataset[line][block-1],dataset[line][block+1]    
                    ];
                    if(dataset[line-1]){
                        around = around.concat(dataset[line-1][block-1], dataset[line-1][block], dataset[line-1][block+1]);
                    }
                    if(dataset[line+1]){
                        around = around.concat(dataset[line+1][block-1],  dataset[line+1][block],  dataset[line+1][block+1]);
                    }
                    e.currentTarget.textContent = around.filter(function(v){
                        return v === "X";
                    }).length;
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //지뢰심기
    for(var k=0; k<shuffle.length;k++)
    {
        var col = Math.floor(shuffle[k] / 10); 
        var row = shuffle[k] % 10;
        tbody.children[col].children[row].textContent = 'X';
        dataset[col][row] = "X";
    }
});
