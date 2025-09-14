import React, { useState }from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {

console.log(response.data);

        const data = response.data;
       const date = new Date((data.time + (data.timezone_offset || 0)) * 1000);

        setWeatherData({
            ready: true,
            time: data.time,
            timezone_offset: data.timezone_offset,
            date: date,
            temperature: data.temperature.current,
            precipitation: data.precipitation,
            city: data.city,
            wind: data.wind.speed,
            humidity: data.temperature.humidity,
            description: data.condition.description,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        });

    }

 if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <h1>{weatherData.city}</h1>
      <ul>
        
        <li>
            <FormattedDate date={weatherData.date}  />
        </li>



        <li className="text-capitalize">{weatherData.description}</li>
        
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}   
            className="float-left"
          />
          <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°F</span>
          </div>
        </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {weatherData.precipitation}%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
     const apiKey = "7689111d9btfeef8e4e3cc0cba8be0o7";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
     axios.get(apiUrl).then(handleResponse);
     return "Loading...";
    }
}

