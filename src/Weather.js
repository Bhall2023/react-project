import React, { useState }from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            precipitation: response.data.temperature.precipitation,
            city: response.data.city,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
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

      <h1>New York</h1>
      <ul>
        <li>WeatherData.date</li>
        <li className="text-capitalize">{weatherData.description}</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img
            src={weatherData.icon}
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
            <li>Wind: {weatherData.wind.speed} km/h</li>
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

