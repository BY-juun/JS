
const modal_open = document.getElementById("modal-open");
const modal_close = document.getElementById("modal-close");

modal_open.addEventListener("click",()=>{
    document.getElementById("modal-area").style.display = "flex";
});

modal_close.addEventListener("click",()=>{
    document.getElementById("modal-area").style.display = "none";
});