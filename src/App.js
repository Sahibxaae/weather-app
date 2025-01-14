import "./App.css";
import searchIcon from "./assets/search.png";
import WeatherDetails from "./WeatherDetails";
// images
import clearIcon from "./assets/sunny.png";
import cloudIcon from "./assets/cloudy.png";
import drizzle from "./assets/drizzle.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import wind from "./assets/wind (1).png";
import humidity from "./assets/humidity.png";
import { useState } from "react";
function App() {
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(38);
  const [condition, setCondition] = useState("clear");
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("india");
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [humid, setHumid] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  return (
    <div className="container">
      <div className="inner-container">
        <input type="text" placeholder="Search city" className="city-search" />
        <div className="search-bar">
          <img src={searchIcon} alt="" width="30px" height="30px" />
        </div>
      </div>
      <WeatherDetails
        clrImage={icon}
        temperature={temp}
        city={city}
        country={country}
        condition={condition}
        long={long}
        lat={lat}
        humidity={humidity}
        humid={humid}
        wind={wind}
        windSpeed={windSpeed}
      />
    </div>
  );
}

export default App;
