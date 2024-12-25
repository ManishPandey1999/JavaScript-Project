let countryInputBox = document.querySelector('#countryInputBox');
let weatherImage = document.querySelector('#weatherImage');
let weatherTemprature = document.querySelector('#weatherTemprature');
let weatherType = document.querySelector('#weatherType');
let cityName = document.querySelector('#cityName');
let humidityDetail = document.querySelector('#humidityDetail');
let windSpeedDetail = document.querySelector('#windSpeedDetail');
let weatherSubmitBtn = document.querySelector('#weatherSubmitBtn');

async function fetchWeather(){
    let country = countryInputBox.value.trim();
    if(country === ''){
        alert('Please enter a country name');
    } else {
        let weatherurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${country}&appid=a4d23dc933cda99d234a8666026b48d6`;

        try {
            const weatherResponse = await fetch(weatherurl);
            if(!weatherResponse.ok){
                throw new Error(`Response status: ${weatherResponse.status}`)
            }

            const weatherData = await weatherResponse.json();
            console.log(weatherData);

            weatherTemprature.textContent = `${Math.round(weatherData.main.temp)}`;
            weatherType.textContent = `${weatherData.weather[0].main}`;
            cityName.textContent = `${weatherData.name}`
            humidityDetail.textContent = `${weatherData.main.humidity}%`;
            windSpeedDetail.textContent = `${weatherData.wind.speed}`

            const weatherCondition = weatherType.textContent.toLocaleLowerCase();
            if(weatherCondition === 'Clear'){
                weatherImage.src = "images/clear-sun.png"
            } else if(weatherCondition === 'smoke'){
                weatherImage.src = "images/cloud-sun.png"
            } else if(weatherCondition === 'rain'){
                weatherImage.src = "images/raindrop.png"
            }

        } catch(error) {
            console.error(error.message);
        }
    }
}



weatherSubmitBtn.addEventListener('click', fetchWeather)