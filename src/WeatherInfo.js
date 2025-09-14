import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    const d = props.data;
    return (
        <div className="WeatherInfo">
        <h1>{d.city}</h1>
      <ul>
        <li>
            <FormattedDate date={d.date}  />
        </li>
        <li className="text-capitalize">{d.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img
            src={d.iconUrl}
            alt={d.description}   
            className="float-left"
          />
          <div className="float-left">
            <span className="temperature">{Math.round(d.temperature)}</span>
            <span className="unit">°F</span>
          </div>
          </div> 
        </div>

         <div className="col-6">
          <ul>
            <li>Precipitation: {d.precipitation}%</li>
            <li>Humidity: {d.humidity}%</li>
            <li>Wind: {Math.round(d.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}