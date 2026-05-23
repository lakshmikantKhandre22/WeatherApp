const apiKey = "58dc451af213b929f59a742700eee735";

const cityInput =
document.querySelector("#cityInput");

const searchBtn =
document.querySelector("#searchBtn");

const temperature =
document.querySelector("#temperature");

const cityName =
document.querySelector("#cityName");

const description =
document.querySelector("#description");

const humidity =
document.querySelector("#humidity");

const wind =
document.querySelector("#wind");

const weatherIcon =
document.querySelector("#weatherIcon");


// Fetch Weather Data
const getWeather = async (city) => {

    try {

        const URL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(URL);

        const data = await response.json();

        console.log(data);

        // API Error

        if (data.cod != 200) {

            alert(data.message);

            return;
        }

        // Update UI

        temperature.innerText =
        `${Math.round(data.main.temp)}°C`;

        cityName.innerText =
        data.name;

        description.innerText =
        data.weather[0].description;

        humidity.innerText =
        `${data.main.humidity}%`;

        wind.innerText =
        `${data.wind.speed} km/h`;

        // Icon

        const iconCode =
        data.weather[0].icon;

        weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    }

    catch (error) {

        console.log(error);

        alert(error.message);
    }
};

// Search Button

searchBtn.addEventListener("click", () => {

    const city =
    cityInput.value.trim();

    if(city === ""){

        alert("Please enter city name");

        return;
    }

    getWeather(city);
});


// Enter Key Support

cityInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        getWeather(cityInput.value);
    }
});


// Default Weather

getWeather("Mumbai");