import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
      return(
        <div className="WeatherInfo">
        <div class="row">
      <div class="col-6">
        <h2 id="date"><FormattedDate date={props.data.date} /></h2>
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li id="description">{props.data.description}</li>
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
      <div>
            <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          id="icon"
          class="float-center"
          alt="weather"
        />
        </div>
          
        <div class="float-right">
          <span id="current_temperature">{Math.round(props.data.temperature)}</span>
          <span class="units">
            <span href="#" id="celsius_link" class="active">
              °C |
            </span>
            <span href="#" id="fahrenheit_link">
              °F
            </span>
          </span>
        </div>

      </div>
    </div>
    
</div>
 );
}