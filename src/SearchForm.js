import React, { useState } from "react";
import "./App.css";

export default function SearchForm({ getCity }) {
  const [CityToSearch, setCityToSearch] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ CityToSearch });
        getCity(CityToSearch);
      }}
    >
      <input
        type="search"
        placeholder="Enter a City"
        name="city"
        autoComplete="off"
        value={CityToSearch}
        onChange={(ev) => setCityToSearch(ev.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
