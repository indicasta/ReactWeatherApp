import React, { useState } from "react";
import "./App.css";

export default function SearchForm({ getCity }) {
  const [CityToSearch, setCityToSearch] = useState("");

  return (
    <form
      className="mt-0 py-0"
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
        className="px-2 border-2 rounded-pill border-info"
        autoFocus="on"
      />
      <input
        type="submit"
        value="Search"
        className="px-2 border-2 rounded-pill border-info"
      />
    </form>
  );
}
