import React from "react";

const WeatherDetails = (props) => {
  return (
    <div>
      <div className="image">
        <img src={props.image} alt="" />
        <div className="temp">{props.temperature} °C</div>
        <div className="city">{props.city}</div>
        <div className="country">{props.country}</div>
        <div className="condition">{props.condition}</div>
        <div className="long-lat">
          <span>Longitute:{props.long}</span> 
          <span>Latitude:{props.lat}</span>
        </div>
      </div>
      <div className="humid-wind">
          <div className="humid"> 
            <img src={props.humidity} alt="Humidity"/>
            <p>{props.humid}%</p>
          </div>
          <div className="wind">
            <img src={props.wind} alt="wind speed"/>
            <p>{props.windSpeed} Kmph</p>
          </div>
        </div>
    </div>
  );
};

export default WeatherDetails;
