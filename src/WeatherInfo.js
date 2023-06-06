import React from "react";
import Spinner from "./Spinner";
import FormattedDate from "./FormattedDate";
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
  // function celsiustoFahrenheit(degree) {
  //   return Math.round((degree * 9) / 5 + 32);
  // }
  // function fahrenheittoCelsius(degree) {
  //   return Math.round(((degree - 32) * 5) / 9);
  // }
  // function mps2mph(velocity) {
  //   return Math.round(velocity * 2.237);
  // }
  // function mph2mps(velocity) {
  //   return Math.round(velocity / 2.237);
  // }
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
                <strong>
                  <span className="temperature">
                    {Math.round(weather.main.temp)}
                  </span>
                  <span className="units">°C|</span>
                  <button className="units" id="unit">
                    °F
                  </button>
                </strong>
              </li>
              <li>
                <strong>{weather.weather[0].description}</strong>

                <img src={url} alt="icon" className="icon" />
              </li>
            </ul>
          </div>
          <div className="ms-5 mt-5">
            <ul>
              <li>
                Humidity: <strong>{weather.main.humidity}%</strong>
              </li>
              <li>
                Wind:{" "}
                <strong>
                  {weather.wind.speed}
                  <span className="text-lowercase"> m/s</span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h2>
          {errorDetails}
          <span>🏙</span>
        </h2>
      )}
    </div>
  );
}
