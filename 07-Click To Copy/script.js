const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) =>{
      e.preventDefault();
  
   
   
   navigator.clipboard.writeText(coupon.value).then(() => {
      btn.textContent = "COPIED!!!!";
      
      setTimeout (() =>{
         btn.textContent = "COPY";
         e.target.style.backgroundColor = 'Yellow';
      }, 3000);
   });

  
}

btn.addEventListener("click" , copyText);