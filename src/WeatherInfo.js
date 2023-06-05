import React from "react";
import Spinner from "./Spinner";
import "./App.css";

export default function WeatherInfo({
  loadingData,
  showData,
  weather,
  errorDetails,
}) {
  var url = "";
  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  }

  return (
    <div className="Weather mt-4">
      {showData ? (
        <ul>
          <li>
            City: <strong>{weather.name}</strong>{" "}
          </li>
          <li>
            Temperature: <strong>{Math.round(weather.main.temp)}°C</strong>
          </li>
          <li>
            Description: <strong>{weather.weather[0].description}</strong>
          </li>
          <li>
            Humidity: <strong>{weather.main.humidity}%</strong>
          </li>
          <li text-transform="lowercase">
            Wind: <strong>{weather.wind.speed}ms</strong>
          </li>
          <li>
            <img src={url} alt="icon" className="icon" />
          </li>
        </ul>
      ) : (
        <h2>
          {errorDetails}
          <span>🏙</span>
        </h2>
      )}
    </div>
  );
}
