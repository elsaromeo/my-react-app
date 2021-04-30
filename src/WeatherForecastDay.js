import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return(
      <div className="col">
       <strong>{day()}</strong>
        <div className="day">
          <WeatherIcon code={props.data.weather[0].icon} size={30} color={"white"}/>  <br />
          {Math.round(Math.round(props.data.temp.max))}°C | {Math.round(props.data.temp.min)}°C
        </div>
      </div>
  );
}