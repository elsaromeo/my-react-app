import React from "react";
import "./Body.css";
export default function Body() {
  return (
    <div class="row">
      <div class="col-6">
        <h1 id="city">Turin</h1>
        <div class="float-right">
          <span id="current_temperature">10</span>
          <span class="units">
            <a href="#" id="celsius_link" class="active">
              °C |
            </a>
            <a href="#" id="fahrenheit_link">
              °F
            </a>
          </span>
        </div>
      </div>

      <div class="col-6">
        <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          id="icon"
          class="float-center"
        />
        <div id="note" class="note">
          Snow
        </div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <i>
              Humidity:<span id="Humidity"></span>%
            </i>
          </li>
          <li>
            <i>
              Wind:<span id="Wind"></span>km/h
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
}