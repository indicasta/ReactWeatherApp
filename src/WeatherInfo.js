import React from "react";
import Spinner from "./Spinner";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./App.css";

export default function WeatherInfo({
  loadingData,
  showData,
  weather,
  errorDetails,
}) {
  var url = "";
  var date;
  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    date = new Date(weather.dt * 1000);
  }
  return (
    <div className="Weather mt-4">
      {showData ? (
        <div className="d-flex justify-content-center">
          <div className="me-5">
            <ul>
              <li>
                <strong className="text-uppercase city">
                  {weather.name} ({weather.sys.country})
                </strong>{" "}
              </li>
              <li className="date">
                <FormattedDate date={date} />
              </li>
              <li>
                <Temperature temp={weather.main.temp} />
              </li>
              <li>
                <strong>{weather.weather[0].description}</strong>
                <div>
                  <img src={url} alt="icon" className="icon mt-0" />
                </div>
              </li>
            </ul>
          </div>
          <div className="ms-5 mt-5">
            <ul>
              <li>
                <span className="title">Humidity: </span>{" "}
                <strong>{weather.main.humidity}%</strong>
              </li>
              <li>
                <span className="title">Wind: </span>
                <strong>
                  {Math.round(weather.wind.speed)}
                  <span className="text-lowercase"> m/s</span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h2>
          {errorDetails}
          <span> 🏙</span>
        </h2>
      )}
    </div>
  );
}
