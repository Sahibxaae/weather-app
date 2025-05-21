const WeatherDetails = (props) => {
  return (
    <div>
      <div className="image">
        <img src={props.image} alt="" draggable={false} />
        <div className="city">{props.city}</div>
        <div className="temp">{props.temperature} °C</div>
        <div>
          {props.min} &deg;C / {props.max} &deg;C
        </div>
        <div className="feels-like">Feels like {props.feelsLike} &deg;C</div>
        <div className="country">{props.country}</div>
        <div className="condition">{props.condition}</div>
        <div className="long-lat">
          <span>Longitute:{props.long}</span>
          <span>Latitude:{props.lat}</span>
        </div>
      </div>
      <div className="humid-wind">
        <div className="humid">
          <img src={props.humidity} alt="Humidity" draggable={false} />
          <label>Humidity</label>
          <p>{props.humid}%</p>
        </div>
        <div className="wind">
          <img src={props.wind} alt="wind speed" draggable={false} />
          <label>Wind speed</label>
          <p>{props.windSpeed} Kmph</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
