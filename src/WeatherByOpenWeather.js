import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import "./App.css";

export default function WeatherByOpenWeather() {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let apiUrl;
  let [weather, setWeather] = useState([]);
  //to control spinner
  let [loading, setLoading] = useState(false);
  //to control when to show the info
  let [show, setShow] = useState(false);
  let [city, setCity] = useState("");

  function getInfo(response) {
    setLoading(false);
    setShow(true);
    setCity(city);
    console.log(response);
    setWeather(response);
  }

  function getCity(newCity) {
    setLoading(true);
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=${apiKey}`;
    axios
      .get(apiUrl)
      .then(getInfo)
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  }
  return (
    <React.Fragment>
      <SearchForm getCity={getCity} />
      <WeatherInfo showData={show} loadingData={loading} weather={weather} />
      <Footer />
    </React.Fragment>
  );
}
