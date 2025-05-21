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
import { useEffect, useState } from "react";

function App() {
  let apiKey = process.env.REACT_APP_API_KEY; //Temporary key
  const [text, setText] = useState("Tokyo");
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(38);
  const [min, setMin] = useState(30);
  const [max, setMax] = useState(38);
  const [feelsLike, setFeelsLike] = useState(30);
  const [condition, setCondition] = useState("clear");
  const [city, setCity] = useState("tokyo");
  const [country, setCountry] = useState("india");
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [humid, setHumid] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [cityNotfound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;
    setLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.error(data.message);
        setCityNotFound(true);
        setLoading(false);
      }
      const weatherIconMap = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": cloudIcon,
        "04n": cloudIcon,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "11d": rain,
        "13d": snow,
        "13n": snow,
        "50d": cloudIcon,
        "50n": cloudIcon,
      };
      const countryCodes = {
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "Åland Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barthélemy",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivia, Plurinational State of",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos (Keeling) Islands",
        CD: "Congo, The Democratic Republic of the",
        CF: "Central African Republic",
        CG: "Congo",
        CH: "Switzerland",
        CI: "Côte d'Ivoire",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cabo Verde",
        CW: "Curaçao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czechia",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FM: "Micronesia, Federated States of",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HM: "Heard Island and McDonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran, Islamic Republic of",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "Korea, Democratic People's Republic of",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Lao People's Democratic Republic",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova, Republic of",
        ME: "Montenegro",
        MF: "Saint Martin (French part)",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "North Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russia",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SX: "Sint Maarten (Dutch part)",
        SY: "Syrian Arab Republic",
        SZ: "Eswatini",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TZ: "Tanzania, United Republic of",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying Islands",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Holy See (Vatican City State)",
        VC: "Saint Vincent and the Grenadines",
        VE: "Venezuela, Bolivarian Republic of",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WS: "Samoa",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      };

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(countryCodes[data.sys.country]);
      setHumid(data.main.humidity);
      setCondition(data.weather[0].main);
      setWindSpeed(Math.floor(data.wind.speed));
      setLong(data.coord.lon);
      setLat(data.coord.lat);
      setMin(Math.floor(data.main.temp_min));
      setMax(Math.floor(data.main.temp_max));
      setFeelsLike(Math.floor(data.main.feels_like));
    } catch (error) {
      console.error("An error occured:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container">
      <div className="search-city">
        <div className="inner-container">
          <input
            type="text"
            placeholder="Search city"
            className="city-search"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div className="search-bar">
            <img
              src={searchIcon}
              alt=""
              width="30px"
              height="30px"
              onClick={() => search()}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <WeatherDetails
          image={icon}
          temperature={temp}
          feelsLike={feelsLike}
          city={city}
          country={country}
          condition={condition}
          long={long}
          lat={lat}
          humidity={humidity}
          humid={humid}
          wind={wind}
          windSpeed={windSpeed}
          min={min}
          max={max}
        />
        <div className="sec-2"></div>
      </div>
    </div>
  );
}

export default App;
