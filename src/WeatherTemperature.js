import React, { useState } from "react";


export default function WeatherTemperature({ celsius, defaultUnit = "fahrenheit" }) {
  const [unit, setUnit] = useState(defaultUnit);

  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  // Guard against missing/invalid prop
  const c = Number.isFinite(celsius) ? celsius : 0;
  const isc = unit === "celsius";

  if (isc) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(c)}</span>
        <span className="unit">
          <span className="active">°C</span> |{" "}
          <button type="button" className="linklike" onClick={() => setUnit("fahrenheit")}>
            °F
          </button>
        </span>
      </div>
    );
  }

  const f = toFahrenheit(c);
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(f)}</span>
      <span className="unit">
        <button type="button" className="linklike" onClick={() => setUnit("celsius")}>
          °C
        </button>{" "}
        | <span className="active">°F</span>
      </span>
    </div>
  );
}
