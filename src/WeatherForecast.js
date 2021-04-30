import React,{useState,useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let[loaded,setLoaded]=useState(false);
  let[forecastData,setForecastData]=useState(null);

  useEffect(()=> {
   setLoaded(false);
  },[props.coordinates]);

    function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);

  }
 
if(loaded){
   return (
    <div className="row" id="weather-forecast">
      <div className="col">
        <WeatherForecastDay data={forecastData[0]}/>
      </div>

      <div className="col">
        <WeatherForecastDay data={forecastData[1]}/>
      </div>

      <div className="col">
        <WeatherForecastDay data={forecastData[2]}/>
      </div>

      <div className="col">
      <WeatherForecastDay data={forecastData[3]}/>
      </div>

      <div className="col">
        <WeatherForecastDay data={forecastData[4]}/>
      </div>
    </div>
  );

}else{
  let apiKey = "53d9f3240876d7e67fb71eca50eddb19";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   return null;
}
}