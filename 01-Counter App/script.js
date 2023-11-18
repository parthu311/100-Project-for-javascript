const counter = document.querySelector(".counter");
const add = document.querySelector(".add");
const sub = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");
const button =document.querySelector(".buttons");

button.addEventListener('click' , (e)=>{
    if(e.target.classList.contains("add")){
        counter.innerHTML++;
        setColor() 
    };
    if(e.target.classList.contains("subtract")){
        counter.innerHTML--;
        setColor()
    };
    if(e.target.classList.contains("reset")){
        counter.innerHTML = 0;
        setColor()
    };
})

function setColor(){
    if(counter.innerHTML > 0){
        counter.style.color = "yellow";
    }else if(counter.innerHTML < 0){
        counter.style.color = "red";
    }else{ counter.style.color = "white";}
}