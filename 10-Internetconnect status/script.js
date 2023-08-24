const img = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgcolor = document.getElementById('main');

function setcolor(){
    bgcolor.classList.add("online") 
}


async function connectionStatus(){

    try{
        const fetchResult = await fetch('https://t4.ftcdn.net/jpg/05/19/17/45/360_F_519174572_BmqEy7OKAQ6fdxVsKqUTfVaLzOUGzIRA.jpg? time=' + (new Date()).getTime());
        image.src = "./images/online.png";
        setcolor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    }catch(error){
        console.log(error);
        statusDisplay.textContent = "OOPS!! YOUR INTERNET IS DOWN";
        img.src ="./images/offline.png";
        bgcolor.classList.remove('online'); 
    }
}

setInterval(async () => {
    const result = await connectionStatus();
    if(result){
        statusDisplay.textContent  = "YOU ARE ONLINE CONNECTION IS LOOK GOOD";
        setcolor();
    }
    
}, 5000);


window.addEventListener("load" ,async (event) => {
    if (connectionStatus()){
        statusDisplay.textContent = "YOU ARE ONLINE";
    }else{
        statusDisplay.textContent = "YOU ARE OFFLINE";
    }
})