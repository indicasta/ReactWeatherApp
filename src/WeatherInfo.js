import React from "react";
import Spinner from "./Spinner";
import "./App.css";

export default function WeatherInfo({ loadingData, showData, weather }) {
  var url = "";
  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = `http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`;
  }

  return (
    <div className="Weather">
      {showData ? (
        <ul>
          <li>
            City: <strong>{weather.data.name}</strong>{" "}
          </li>
          <li>
            Temperature: <strong>{Math.round(weather.data.main.temp)}°C</strong>
          </li>
          <li>
            Description: <strong>{weather.data.weather[0].description}</strong>
          </li>
          <li>
            Humidity: <strong>{weather.data.main.humidity}%</strong>
          </li>
          <li text-transform="lowercase">
            Wind: <strong>{weather.data.wind.speed}ms</strong>
          </li>
          <li>
            <img src={url} alt="icon" className="icon" />
          </li>
        </ul>
      ) : (
        <h2>NO INFO TO SHOW, PLEASE ENTER A CITY</h2>
      )}
    </div>
  );
}
