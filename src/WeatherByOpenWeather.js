import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import CurrentLocation from "./CurrentLocation";
import "./App.css";

export default function WeatherByOpenWeather() {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let [weather, setWeather] = useState([]);
  //to control spinner
  let [loading, setLoading] = useState(false);
  //to control when to show the info
  let [show, setShow] = useState(false);
  let [city, setCity] = useState("");
  let [error, setError] = useState("NO INFO TO SHOW, PLEASE ENTER A CITY");

  function getInfo(response) {
    setLoading(false);
    setShow(true);
    setCity(city);
    console.log(response.data);
    setWeather(response.data);
  }

  function getCity(newCity) {
    setLoading(true);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=${apiKey}`;
    axios
      .get(apiUrl)
      .then(getInfo)
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
        setError("YOU MUST INTRODUCE A VALID CITY NAME");
      });
  }
  function getCurrentLocationInfo(props) {
    setShow(props.showData);
    setLoading(props.loadingData);
    setWeather(props.weather);
    setError(props.errorDetails);
  }
  return (
    <React.Fragment>
      <SearchForm getCity={getCity} />
      <CurrentLocation displayInfo={getCurrentLocationInfo} />
      <WeatherInfo
        showData={show}
        loadingData={loading}
        weather={weather}
        errorDetails={error}
      />
      <Footer />
    </React.Fragment>
  );
}
