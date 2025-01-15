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
  let apiKey = process.env.REACT_APP_API_KEY; //Temporary key
  const [text,setText] = useState("chennai");
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(38);
  const [condition, setCondition] = useState("clear");
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("india");
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [humid, setHumid] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [cityNotfound, setCityNotFound] = useState(false);
  const [loading,setLoading] = useState(false);

  const search = async () =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;
    setLoading(true);
    try{
      let res = await fetch(url);
      let data = await res.json();
      if(data.cod === "404"){
      console.error("City not found");
      setCityNotFound(true);
      setLoading(false);
      }
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setHumid(data.main.humidity);
      setCondition(data.weather[0].main);
      setWindSpeed(Math.floor(data.wind.speed))
      setLong(data.coord.lon);
      setLat(data.coord.lat);
      
    }catch(error){
      console.error("An error occured:",error.message);
      
    }finally{
      setLoading(false);
    }
  }


  const handleCity = (e) =>{
   setText(e.target.value);
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      search();
    }
  }

  return (
    <div className="container">
      <div className="inner-container">
        <input type="text" placeholder="Search city" className="city-search" onChange={handleCity} value={text} onKeyDown={handleKeyDown}/>
        <div className="search-bar">
          <img src={searchIcon} alt="" width="30px" height="30px" onClick={()=>search()}/>
        </div>
      </div>
      <WeatherDetails
        image={icon}
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
