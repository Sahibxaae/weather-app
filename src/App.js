import "./App.css";
import searchIcon from "./assets/search.png";
function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <input type="text" placeholder="Search city" className="city-search"/>
        <div className="search-bar">
        <img src={searchIcon} alt="" width="30px" height="30px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
