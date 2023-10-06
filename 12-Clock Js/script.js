const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const sec = now.getSeconds();
    const secondsDegree = ((sec / 60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const min = now.getMinutes();
    const minutesDegree = ((min / 60)*360) +  ((sec /60)*6) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setInterval(setDate,1000); 

setDate();

