const apiKey = "bac9df700e5b43999ca375ff6171a8fc"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');
const GetWeather = async () => {    
    try {
        const response  = await fetch(apiUrl + `&appid=${apiKey}`+ `&q=${input.value}`)    
    } catch (err) {
        weather.style.display = 'none'
        error.style.display = 'block'
        error.innerHTML = err.message
    }
    
    if(response.status==404 || input.value===''){
        weather.style.display = 'none'
        error.style.display = 'block'
        
        input.value='';
        return;
    }
        
    
    
    const data = await response.json()
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp)  +"°c";
    humidity.innerHTML = data.main.humidity +"%";
    windSpeed.innerHTML = data.wind.speed + " km/h";
    input.value='';
    weather.style.display='block';
    error.style.display = 'none'
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = 'images/rain.png'
    }
    else if(data.weather[0].main === 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }
    else if(data.weather[0].main === 'Wind'){
        weatherIcon.src = 'images/wind.png'
    }
    else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }

}

btn.addEventListener("click",GetWeather);

input.addEventListener('keypress' , (event)=>{
    let keycode = event.keyCode;
    if(keycode===13){
        GetWeather();
    }
});


// GetWeather();