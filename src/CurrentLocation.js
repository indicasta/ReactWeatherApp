import React from "react";
import { useState } from "react";
import locButton from "./images/currentLocation.png";
import "./CurrentLocation.css";

export default function CurrentLocation() {
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");
  function onClick(ev) {
    ev.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      });
      console.log(latitude);
      console.log(longitude);
    }
  }
  return (
    <button className="PositionBtn img-fluid">
      <img src={locButton} alt="Current Location" onClick={onClick} />
    </button>
  );
}
