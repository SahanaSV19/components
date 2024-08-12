import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/WeatherWidget.css"; // Import the CSS file for styling

const WeatherWidget = () => {
  const [city, setCity] = useState("Bengaluru");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [inputCity, setInputCity] = useState("");

  const apiKey = "5d29e79ee577676ddadee49b6079f12d"; // Kindly Replace with your OpenWeatherMap API key after setting up an account on open weatger map

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeather(null);
    }
  };

  // Fetch weather data for Bengaluru as default
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      fetchWeather(inputCity);
      setCity(inputCity);
      setInputCity("");
    }
  };

  return (
    <div className="weather-widget">
      <h3>Weather Widget</h3>
      <form className="formcont" onSubmit={handleSearch}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h5>{weather.name}</h5>
          <div className="dataCont">
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
