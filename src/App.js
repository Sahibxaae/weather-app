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
function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <input type="text" placeholder="Search city" className="city-search"/>
        <div className="search-bar">
        <img src={searchIcon} alt="" width="30px" height="30px"/>
        </div>
      </div>
      <WeatherDetails clrImage={clearIcon}/>
    </div>
  );
}

export default App;
