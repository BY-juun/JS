var 테이블 = document.getElementById("table");
var 데이터 = [];

function 초기화() {
    var fragment = document.createDocumentFragment();
    [1, 2, 3, 4].forEach(function() {
      var 열데이터 = [];
      데이터.push(열데이터);
      var tr = document.createElement('tr');
      [1, 2, 3, 4].forEach(function() {
        열데이터.push(0);
        var td = document.createElement('td');
        tr.appendChild(td);
      });
      fragment.appendChild(tr);
    });
    테이블.appendChild(fragment);
}

function 랜덤생성(){
    var 빈칸배열 = []; // 배열의 빈칸인 부분의 가로 세로 정보를 가지고 있는 배열
    데이터.forEach(function(열데이터, i){
        열데이터.forEach(function(행데이터, j){
            if(!행데이터){
                빈칸배열.push([i,j]);
            }
        });
    });
    var 랜덤칸 = 빈칸배열[Math.floor(Math.random() * 빈칸배열.length)]; // 랜덤칸은 [i,j]의 형태
    데이터[랜덤칸[0]][랜덤칸[1]] = 2; //데이터[i][j] = 2;
    그리기();
}

function 그리기(){
    데이터.forEach(function(열데이터, i){
        열데이터.forEach(function(행데이터, j){
            if(행데이터 > 0 ){
                테이블.children[i].children[j].textContent = 행데이터;
            }else{
                테이블.children[i].children[j].textContent = "";
            }
        });
    });
}
  
초기화();
랜덤생성();
그리기();

var 드래그시작 = false;
var 시작좌표;
var 끝좌표;
window.addEventListener("mousedown",function(이벤트){
    드래그시작 = true;
    시작좌표 = [이벤트.clientX,이벤트.clientY];
});

window.addEventListener("mousemove",function(이벤트){
    if(드래그시작){
        console.log("mousemove",이벤트);
    }
});

window.addEventListener("mouseup",function(이벤트){
    드래그시작 = false;
    끝좌표 = [이벤트.clientX,이벤트.clientY];
});