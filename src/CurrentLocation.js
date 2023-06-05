import React from "react";
import axios from "axios";
import locButton from "./images/currentLocation.png";
import "./CurrentLocation.css";
import GeoLocation from "./GeoLocation";

export default function CurrentLocation({ displayInfo }) {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let location = GeoLocation();
  let currentLocationURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.latitude}&lon=${location.coordinates.longitude}&appid=${apiKey}&units=metric`;
  let error = "Location data not available yet.";
  let props = {
    loadingData: false,
    showData: false,
    weather: null,
    errorDetails: error,
  };

  function getCurrentInfo(response) {
    props.loadingData = false;
    props.showData = true;
    props.weather = response.data;
    displayInfo(props);
  }
  function onClick(ev) {
    ev.preventDefault();
    props.loadingData = true;
    if (location.loaded) {
      axios
        .get(currentLocationURL)
        .then(getCurrentInfo)
        .catch((error) => {
          console.log(error);
          props.showData = false;
          props.loadingData = false;
          props.errorDetails = error;
        });
    } else {
      props.showData = false;
      props.loadingData = false;
      props.errorDetails = error;
      displayInfo(props);
    }
  }
  return (
    <button className="PositionBtn img-fluid mx-auto">
      <img src={locButton} alt="Current Location" onClick={onClick} />
    </button>
  );
}
