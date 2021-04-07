import React from "react";
import axios from 'axios';

export default function Weather(){

    function showTemperature(response){
        alert(`The weather in Rome is ${response.data.main.temp} degrees`)
    }
  let apiKey = "53d9f3240876d7e67fb71eca50eddb19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
 
  return <h2>Helllo from weather</h2>
}