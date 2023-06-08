import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center footer-github-link Footer mb-5 mt-0">
      <strong>
        <a
          href="https://github.com/indicasta/ReactWeatherApp"
          title="IndiCasta🧿's React Weather App"
          className="text-decoration-none"
        >
          Open-Source{" "}
        </a>
        Coded by IndiCasta🧿
      </strong>
    </div>
  );
}
