const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");


const randomColor = () =>{
   const color = Math.random().toString(16).substring(2,8);
   document.body.style.backgroundColor = "#" + color;
   hex.innerHTML= "#" + color;
}

btn.addEventListener("click " , randomColor);

randomColor();