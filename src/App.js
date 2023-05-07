import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

import WeatherByOpenWeather from "./WeatherByOpenWeather";

function App() {
  // const [city, setCity] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherByOpenWeather />
      </header>
    </div>
  );
}

export default App;
