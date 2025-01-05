

let city = document.querySelector(".cityName"); // Input field
let searchButton = document.querySelector(".searchIcon"); // Search button

// DOM Elements to Update Weather Data
let locationName = document.querySelector(".locationDiv p");
let temperature = document.querySelector(".weatherDiv p span");
let dateNow = document.querySelector(".dateDiv p");
let humidity = document.querySelector(".humidityDiv p:last-of-type span");
let windSpeed = document.querySelector(".windSpeedDiv p:last-of-type span");
let feelsLike = document.querySelector(".feelsLikeDiv p:last-of-type span");
let windDirection = document.querySelector(".windDirectionDiv p:last-of-type span");
let image = document.querySelector(".weatherDiv img:last-of-type");


// API Key
const apiKey = "169cbe95cfb3eeea0db57c8ec1a6b05d";

// Function to Fetch Coordinates

async function getCoordinates(cityName) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found!");
    }

    return response.json();
}




// Function to Fetch Coordinates
// async function getCoordinates(cityName) {
//     const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}`;

//     console.log( "fetching .....");

//     const response = await fetch(url, {
//         method: 'GET', // The method (GET, POST, etc.)
//         headers: {
//             'Content-Type': 'application/json', // Request type
//             'Authorization': `Bearer ${apiKey}` // Set the API key in Authorization header
//         }
//     });

//     console.log( response);

//     if (!response.ok) {
//         throw new Error("City not found!");
//     }

//     console.log( "done");

//     return response.json();
// }







// Function to Fetch Weather Data
async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Weather data not available!");
    }

    return response.json();
}

// Get Today's Date
function getDate() {
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(today.getDate()).padStart(2, '0');
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${day} ${month} ${year}`;
}

// Update Weather Information in DOM
async function updateWeather(cityName) {
    try {
        // Get Coordinates
        const coordinates = await getCoordinates(cityName);
        const lat = coordinates[0].lat;
        const lon = coordinates[0].lon;

        // Get Weather Data
        const weatherData = await getWeatherData(lat, lon);

        // Update DOM Elements
        locationName.innerText = weatherData.name;
        temperature.innerText = `${Math.round(weatherData.main.temp)} °C`;
        dateNow.innerText = getDate();
        humidity.innerText = `${weatherData.main.humidity}%`;
        windSpeed.innerText = `${weatherData.wind.speed} m/s`;
        windDirection.innerText = `${weatherData.wind.deg}°`;
        feelsLike.innerText = `${weatherData.main.feels_like} °C`;




        const description = weatherData.weather[0].main; // Get weather description

        // Check weather type and set the image source
        if (description === "Rain") {
            image.src = 'rain.svg';
        } else if (description === "Snow") {
            image.src = "snowfall.svg";
        } else if (description === "Haze" || description === "Clouds") {
            image.src = 'cloudyIcon.svg'; // Added quotes
        } else if (description === "Thunderstorm") {
            image.src = 'thunderstorm.svg'; // Added quotes
        } else {
            image.src = 'clear.svg'; // Added quotes
        }


    } catch (error) {
        alert(error.message); // Handle errors
    }
}

// Event Listener for Search Button
searchButton.addEventListener("click", () => {
    const cityName = city.value.trim(); // Get input value
    if (cityName) {
        updateWeather(cityName); // Fetch weather data
    } else {
        alert("Please enter a city name!");
    }
});


// Event Listener for Enter Presssed !
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        const cityName = city.value.trim(); // Get input value
        if (cityName) {
            updateWeather(cityName); // Fetch weather data
        } else {
            alert("Please enter a city name!");
        }
    }
});






// let city = document.querySelector(".cityName");
// let searchButton = document.querySelector(".searchIcon");

// searchButton.addEventListener("click", (evt) => {
//     let cityName = city.value;

//     updateWeather(cityName);

// });
// let urlForcoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=169cbe95cfb3eeea0db57c8ec1a6b05d`;


// let locationName = document.querySelector(".locationDiv p").innerText;
// let temperature = document.querySelector(".weatherDiv p span").innerText;
// let dateNow = document.querySelector(".dateDiv p").innerText;
// let humidity = document.querySelector(".humidityDiv p:last-of-type span").innerText;
// let windSpeed = document.querySelector(".windSpeedDiv p:last-of-type span").innerText;
// let feelsLike = document.querySelector(".feelsLikeDiv p:last-of-type span").innerText;
// let windDirection = document.querySelector(".windDirectionDiv p:last-of-type span").innerText;





// async function getCoordinates(cityName) {
//     let response = await fetch(urlForcoordinates);

//     return response.json();
// }



// async function getWeatherData(cityName) {
//     let coordinateObject = await getCoordinates(cityName);

//     let lat = coordinateObject[0].lat;
//     let lon = coordinateObject[0].lon;

//     let urlForWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=169cbe95cfb3eeea0db57c8ec1a6b05d`;

//     let response = await fetch(urlForWeather);

//     let data = await response.json();

//     return data;
// }

// function getDate() {
//     const today = new Date(); // Get the current date

//     // Define month names
//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     // Extract day, month, and year
//     const day = String(today.getDate()).padStart(2, '0'); // Ensure 2 digits
//     const month = months[today.getMonth()]; // Get month name
//     const year = today.getFullYear(); // Get full year

//     // Format the date
//     return `${day} ${month} ${year}`;
// }



// async function updateWeather(cityName) {
//     let weatherObject = await getWeatherData(cityName);

//     locationName = weatherObject.name;
//     temperature = weatherObject.main.temp;
//     dateNow = getDate();
//     humidity = weatherObject.main.humidity;
//     windSpeed = weatherObject.wind.speed;
//     windDirection = weatherObject.wind.deg;
//     feelsLike = weatherObject.main.feels_like;


// }




