import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center footer-github-link Footer">
      <strong>
        <a
          href="https://github.com/indicasta/IndiCasta"
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
