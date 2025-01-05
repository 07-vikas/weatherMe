# WeatherMe 🌦️

WeatherMe is a simple weather application that provides real-time weather information based on a city's name. The app fetches weather data using **two public APIs**:
1. **Coordinates API**: Fetches the latitude and longitude of a given city.
2. **Weather API**: Uses the coordinates to fetch weather data (temperature, humidity, wind speed, etc.) for the city.

## Features

- **Search Weather by City Name**: Enter any city's name to get the current weather information.
- **Live Weather Data**: Displays accurate and up-to-date weather details like temperature, humidity, and wind speed.
- **Dynamic Weather Icons**: The app changes its icon based on the weather conditions (Rain, Snow, Clear Sky, etc.).

## Tech Stack

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## How It Works

1. The user enters a **city name** in the search box.
2. The app uses the **Geo API** to fetch the coordinates (latitude and longitude) of that city.
3. It then uses the **Weather API** to fetch the weather details using those coordinates.
4. The page updates to display the **current weather**, including temperature, humidity, wind speed, and relevant weather icon.
5. The app also changes its background or icons based on the weather conditions.

## Demo

[Click here to see the live demo](https://weatherme07.netlify.app).
[Click here to see the live demo]() *(link can be added after deployment)*

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weatherMe.git
