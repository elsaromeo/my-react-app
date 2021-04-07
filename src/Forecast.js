import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row" id="weather-forecast">
      <div className="col">
        Mon
        <div className="day">
          ☀️ <br />
          22°C | 18°C
        </div>
      </div>

      <div className="col">
        Tue
        <div className="day">
          ☀️ <br />
          20°C| 13°C
        </div>
      </div>

      <div className="col">
        Wed
        <div className="day">
          🌤 <br />
          21°C| 15°C
        </div>
      </div>

      <div className="col">
        Thu
        <div className="day">
          ☁️
          <br />
          18°C| 12°C
        </div>
      </div>

      <div className="col">
        Fri
        <div class="day">
          ⛈ <br />
          15°C| 10°C
        </div>
      </div>
    </div>
  );
}