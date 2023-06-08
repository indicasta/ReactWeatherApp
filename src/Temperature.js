import { useState } from "react";
import React from "react";
import "./App.css";

export default function Temperature(temp) {
  const [value, setValue] = useState(" °F");
  const [unitTemp, setUnitTemp] = useState("°C|");
  var temp_c = temp.temp;
  const [temp2display, setTemp2display] = useState(temp_c);
  function celsiustoFahrenheit(degree) {
    return Math.round((degree * 9) / 5 + 32);
  }
  function changeUnit(e) {
    e.preventDefault();
    if (value === " °F") {
      setTemp2display(celsiustoFahrenheit(temp_c));
      setValue(" °C");
      setUnitTemp("°F|");
    } else {
      setTemp2display(temp_c);
      setValue(" °F");
      setUnitTemp("°C|");
    }
  }
  return (
    <strong>
      <span className="temperature">{Math.round(temp2display)}</span>
      <span className="units">{unitTemp}</span>
      <button className="units" id="unit" onClick={changeUnit}>
        {value}
      </button>
    </strong>
  );
}
