const apiKey = '9d28076f4fd36d5be58503e56d0a9740';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const respones = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respones.json();

    if(respones.status == 404){
        alert("City is Invaild")
    }else{
    // console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML =Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }
    else if(data.weather[0].main == 'Show'){
        weatherIcon.src = 'images/show.png';
    }

    document.querySelector('.weather').style.display = 'block';

    }
}



searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);

} )


