import "./Weather.css";
import React,{useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event){
    setCity(event.target.value);
  }

  function search(){
    const apiKey = "53d9f3240876d7e67fb71eca50eddb19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }


  if(weatherData.ready){
  return (
    <div className="Weather">
      <br />
      <form onSubmit={handleSubmit} id="searchForm" class="form-row">
        <div class="col">
          <input
            class="form-control"
            type="text"
            placeholder="Search city"
            autofocus="on"
            id="searchCity"
            onChange={handleCityChange}
          />
        </div>
        <div class="col">
          <div class="btn-group" role="group">
            <button
              id="search_button"
              type="submit"
              class="btn btn-secondary btn-sm"
              value="search"
            >Search 🔍
            </button>
          </div>
        </div>
      </form>
      <br />
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates}/>
            
    </div>
  );}else{
search();
return "Loading...";
  }
}
