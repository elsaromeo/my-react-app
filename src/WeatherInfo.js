import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
      return(
        <div className="WeatherInfo">
        <div class="row">
      <div class="col-6">
        <h2 id="date"><FormattedDate date={props.data.date} /></h2>
        <h1 id="city">{props.data.city}</h1>
        <ul>
        <WeatherTemperature celsius={props.data.temperature} />
          <li id="description">
          {props.data.description}
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
        <ul id="IconDesc">
          <li>
            <WeatherIcon code={props.data.icon} size={130}/>
            </li>
            </ul>
      </div>
    </div>
    
</div>
 );
}