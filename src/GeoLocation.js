import { useState, useEffect } from "react";

export default function GeoLocation() {
  let [location, setLocation] = useState({
    loaded: false,
    coordinates: { latitude: "", longitude: "" },
  });
  let onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };
  let onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
