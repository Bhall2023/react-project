import React, { useState }from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
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

    function search () {
     const apiKey = "7689111d9btfeef8e4e3cc0cba8be0o7";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
     axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    
    function handleCityChange(event) {
        setCity(event.target.value);
        }

 if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
  <WeatherInfo data={weatherData} />
    </div>
  );
} else {
  search();
  return "Loading...";
  }
        }
