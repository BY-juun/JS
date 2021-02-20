//정적스코핑 , 클로저, 비동기 . 화면에 표시되는것과 data의 일치, filter함수
//call함수, Array.prototype

var tbody = document.querySelector("#table tbody");
tbody.style.textAlign = "center";
var dataset = [];
var flag = false;
var opened_block = 0;
document.querySelector("#exec").addEventListener("click",function(){
    tbody.innerHTML ="";
    dataset=[];
    flag = false;
    opened_block = 0;
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
            arr.push(0);
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
                    dataset[line][block] = 2;
                }
                else if (e.currentTarget.textContent === "!")
                {
                    e.currentTarget.textContent = "?";
                    dataset[line][block] = 2;
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
                if(flag)
                {
                    return;
                }
                var parent_tr = e.currentTarget.parentNode;
                var parent_tbody = e.currentTarget.parentNode.parentNode;
                var block = Array.prototype.indexOf.call(parent_tr.children,e.currentTarget);
                var line = Array.prototype.indexOf.call(parent_tbody.children,parent_tr);
                if(dataset[line][block] === 1) 
                {
                    return;
                }
                e.currentTarget.classList.add("opened");
                opened_block++;
                if(dataset[line][block] === "X")
                {
                    
                    e.currentTarget.textContent = "펑";
                    document.querySelector("#result").textContent="실패 ㅠㅠ";
                    flag = true;
                }
                else
                {
                    dataset[line][block] = 1;
                    var around = [
                        dataset[line][block-1],dataset[line][block+1]    
                    ];
                    if(dataset[line-1]){
                        around = around.concat(dataset[line-1][block-1], dataset[line-1][block], dataset[line-1][block+1]);
                    }
                    if(dataset[line+1]){
                        around = around.concat(dataset[line+1][block-1],  dataset[line+1][block],  dataset[line+1][block+1]);
                    }
                    var around_mine = around.filter(function(v){
                        return v === "X";   
                    }).length;
                    e.currentTarget.textContent = around_mine || "";
                    if(around_mine === 0)
                    {
                        //주변 8칸 동시오픈
                        var around_block = [];
                        if(tbody.children[line-1]){
                            around_block = around_block.concat([
                                tbody.children[line-1].children[block-1],
                                tbody.children[line-1].children[block],
                                tbody.children[line-1].children[block+1]
                            ]);
                        }
                        around_block = around_block.concat([
                            tbody.children[line].children[block-1],
                            tbody.children[line].children[block+1]
                        ]);
                        if(tbody.children[line+1]){
                            around_block = around_block.concat([
                                tbody.children[line+1].children[block-1],
                                tbody.children[line+1].children[block],
                                tbody.children[line+1].children[block+1]
                            ]);
                        }
                        around_block.filter(function(v){return !!v}).forEach(function(옆칸){
                            var parent_tr = 옆칸.parentNode;
                            var parent_tbody = 옆칸.parentNode.parentNode;
                            var 옆칸_block = Array.prototype.indexOf.call(parent_tr.children,옆칸);
                            var 옆칸_line = Array.prototype.indexOf.call(parent_tbody.children,parent_tr);
                            if(dataset[옆칸_line][옆칸_block] !== 1)
                            {
                                옆칸.click();
                            }
                        });
                    }
                    if(opened_block === hor*ver-mine)
                    {
                        flag = true;
                        document.querySelector("#result").textContent="승리!!";
                    } 
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
