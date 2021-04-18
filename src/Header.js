import "./Header.css";
import React,{useState} from "react";
import FormattedDate from "./FormattedDate.js"
import axios from "axios";
export default function Header() {
  const[date,setDate]=useState(null);
  const[ready,setReady]=useState(false);
  function showDate(response){
    setDate(new Date(response.data.dt*1000));
    setReady(true);
  }
  
  if(ready){
  return (
    
    <div className="header">
      <h2 id="date"><FormattedDate date={date} /></h2>
      <form id="searchForm" class="form-row">
        <div class="col">
          <input
            class="form-control"
            type="text"
            placeholder="Search city"
            autofocus="on"
            id="searchCity"
          />
        </div>
        <div class="col">
          <div class="btn-group" role="group">
            <button
              id="search_button"
              type="submit"
              class="btn btn-secondary btn-sm"
              value="search"
            >
              Search 🔍
            </button>
            <button
              id="location_button"
              type="submit"
              class="btn btn-secondary btn-sm"
              value="location"
            >
              Current location 📍
            </button>
          </div>
        </div>
      </form>
    </div>
  );}else{
    const apiKey = "53d9f3240876d7e67fb71eca50eddb19";
  let city="rome";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showDate);
return "Loading...";
  }
}
