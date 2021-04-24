import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
      return(
        <div className="WeatherInfo">
        <div class="row">
      <div class="col-6">
        <h2 id="date"><FormattedDate date={props.data.date} /></h2>
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li id="temperature">
            <span id="current_temperature">   {Math.round(props.data.temperature)}</span>
          <span class="units">
            <span href="#" id="celsius_link" class="active">
              °C |
            </span>
            <span href="#" id="fahrenheit_link">
              °F
            </span>
          </span>
          </li>
          <li>  
              Precipitation: <span id="Precipitation">{props.data.precipitation}</span> km/h  
          </li>
          <li>
              Humidity: <span id="Humidity">{props.data.humidity}</span>%
          </li>
          <li>
              Wind: <span id="Wind">{props.data.wind}</span> km/h
          </li>
        </ul>
      </div>

      <div class="col-4">
        <ul id="IconDesc"><li id="description">
          {props.data.description}
          </li>
          <li>
            <WeatherIcon code={props.data.icon} size={130}/>
            </li></ul>
      </div>
    </div>
    
</div>
 );
}