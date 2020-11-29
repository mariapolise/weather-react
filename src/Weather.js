import React from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'

export default function Weather(props){
function getWeather(response){
  alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
}

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=aff49264e3b244a0afae2d8202fca638&units=metric`;
axios.get(apiUrl).then(getWeather);
return (
  <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={null}/>
);
};