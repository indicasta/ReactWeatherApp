import React from "react";

export default function FormattedDate(date) {
  let day = date.date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hours = date.date.getHours();
  let minutes = date.date.getMinutes();
  let month = date.date.getMonth();
  let dateC = date.date.getDate();
  let year = date.date.getFullYear();
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;
  let today = days[day];
  return (
    <div>
      {today} {months[month]} {dateC}, {year} {hours}:{minutes}H
    </div>
  );
}
