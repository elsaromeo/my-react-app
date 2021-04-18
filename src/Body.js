import React,{useState} from "react";
import axios from "axios";
import "./Body.css";
export default function Body() {

const[temperature,setTemperature]=useState(null);
const[ready,setReady]=useState(false);
const[weatherData,setWeatherData]=useState({});

    function showTemperature(response){
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
        setWeatherData({
          date:"Wednesday 07:00",
          temperature:response.data.main.temp,
          precipitation:15,
          wind:response.data.wind.speed,
          humidity:response.data.main.humidity,
          iconUrl:"",
          city:response.data.name,
          description:response.data.weather[0].description
        })
    }

    if(ready){
      return(
        <div class="row">
      <div class="col-6">
        <h1 id="city">{weatherData.city}</h1>
        <ul>
          <li id="description">{weatherData.description}</li>
          <li>  
              Precipitation: <span id="Precipitation">{weatherData.precipitation}</span> km/h  
          </li>
          <li>
              Humidity: <span id="Humidity">{weatherData.humidity}</span>%
          </li>
          <li>
              Wind: <span id="Wind">{weatherData.wind}</span> km/h
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
          <span id="current_temperature">{Math.round(temperature)}</span>
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
      );
    }else{
  const apiKey = "53d9f3240876d7e67fb71eca50eddb19";
  let city="rome";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
return "Loading...";
    }
}
