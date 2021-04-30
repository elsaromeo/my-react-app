import React,{useState} from "react"


export default function WeatherTemperature(props){
    const [unit,setUnit]=useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
         event.preventDefault();
        setUnit("celsius");
    }

    if(unit==="celsius"){
            return (<li id="temperature">
            <span id="current_temperature">   {Math.round(props.celsius)}</span>
          <span class="units">
            <span id="celsius_link">
              °C |
            </span>
           <a href="/" id="fahrenheit_link" onClick={showFahrenheit}>°F</a>  
          </span>
          </li>);
    }else{
        let fahrenheit=(props.celsius*9/5)+32;
        return(
          <li id="temperature">
            <span id="current_temperature">   {Math.round(fahrenheit)}</span>
          <span class="units">{" "}
            <a href="/" id="celsius_link" onClick={showCelsius}>
              °C 
            </a>
           <span id="fahrenheit_link">
              |°F {" "}
            </span>
          </span>
          </li>  
        );
    }
}