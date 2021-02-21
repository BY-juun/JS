var Body = document.body;
var Table = document.createElement("table");
var array_block = [];
var array_line = [];
var turn = 'X';
var check;
var line_num;
var block_num;

function check_result(){
    check = false;
    //가로검사
    if(array_block[line_num][0].textContent === turn && array_block[line_num][1].textContent === turn && array_block[line_num][2].textContent === turn )
    {
        check = true;
    }

    if(array_block[0][block_num].textContent === turn && array_block[1][block_num].textContent === turn && array_block[2][block_num].textContent === turn)
    {
        check = true;
    }

  
    if(array_block[0][0].textContent === turn && array_block[1][1].textContent === turn && array_block[2][2].textContent === turn )
    {
        check = true;
    }
    

  
    if(array_block[2][0].textContent === turn && array_block[1][1].textContent === turn && array_block[0][2].textContent === turn )
    {
        check = true;
    }
   
 
}

function initialize(draw){
    if(draw)
    {
        result.textContent = "무승부";
    }
    else
    {    
        result.textContent = turn + "님이 승리하셨습니다!";
    }//초기화 코드
    turn = 'X';
    setTimeout(function(){array_block.forEach(function(line){
        result.textContent="";
        line.forEach(function(block){
            block.textContent="";
        });
    })},1000);
    
}

var call_back = function(e){

    if(turn==="O")
    {
        return;
    }
    line_num = array_line.indexOf(e.target.parentNode);
    block_num = array_block[line_num].indexOf(e.target);
   
    if(array_block[line_num][block_num].textContent != "") //빈칸이 아니다.
    {
      
    }
    else // == undefine >> 빈칸이다.
    {
        array_block[line_num][block_num].textContent = turn;
        check_result();
        var candidate_block = [];
        array_block.forEach(function(line){
            line.forEach(function(block){
                candidate_block.push(block);
            });
        });
        candidate_block = candidate_block.filter(function(element){return !element.textContent});
        if(check) //다 찼으면,
        {
            initialize(false);
        }
        else if(candidate_block.length === 0)
        {
            initialize(true);
        }
        else //다 안찼으면,
        {
            if(turn === 'X')
            {
                turn = 'O';
            }
            
            setTimeout(function(){
                //빈칸 중 하나를 고른다
                var coumputer_choice = candidate_block[Math.floor(Math.random() * candidate_block.length)];
                coumputer_choice.textContent = turn;
                check_result();
                if(check)
                {
                    initialize(false);
                }
                
                //턴을 나한테 넘긴다.
                turn = "X";
            },1000);
        }
    }   
    
}

for(var i = 0 ; i < 3 ; i++)
{
    var line = document.createElement("tr");
    array_line.push(line);
    array_block.push([]);
    for(var j = 0; j < 3; j++)
    {
        var block = document.createElement("td");
        block.addEventListener('click',call_back);
        array_block[i].push(block);
        line.appendChild(block);
    }
    Table.appendChild(line);
}
var result = document.createElement("h1");
Body.appendChild(Table);
Body.append(result);
