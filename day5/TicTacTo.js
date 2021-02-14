var Body = document.body;
var Table = document.createElement("table");
var array_block = [];
var array_line = [];
var turn = 'X';

var call_back = function(e){

    var line_num = array_line.indexOf(e.target.parentNode);
    var block_num = array_block[line_num].indexOf(e.target);


    if(array_block[line_num][block_num].textContent != "") //빈칸이 아니다.
    {
      
    }
    else // == undefine >> 빈칸이다.
    {
        array_block[line_num][block_num].textContent = turn;
        var check = false;
        //가로검사
        if(array_block[line_num][0].textContent === turn && array_block[line_num][1].textContent === turn && array_block[line_num][2].textContent === turn )
        {
            check = true;
        }

        if(array_block[0][block_num].textContent === turn && array_block[1][block_num].textContent === turn && array_block[2][block_num].textContent === turn)
        {
            check = true;
        }

        if((line_num === block_num)) //기울기 -1대각선 검사가 필요한 경우
        {
            if(array_block[0][0].textContent === turn && array_block[1][1].textContent === turn && array_block[2][2].textContent === turn )
            {
                check = true;
            }
        }

        if(Math.abs(line_num-block_num) == 2) //가울기 1대각선 검사가 필요한경우
        {
            if(array_block[2][0].textContent === turn && array_block[1][1].textContent === turn && array_block[0][2].textContent === turn )
            {
                check = true;
            }
        }

        if(check) //다 찼으면,
        {
            result.textContent = turn + "님이 승리하셨습니다!";
            //초기화 코드
            turn = 'X';
            array_block.forEach(function(line){
                line.forEach(function(block){
                    block.textContent="";
                })
            })
        }
        else //다 안찼으면,
        {
            if(turn === 'O')
                turn = 'X';
            else
                turn = 'O';
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
