import { useState, useEffect } from "react";
import { MapPin, Thermometer, Wind, Loader2, Search, Clock } from "lucide-react";

function WeatherApi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch cities based on search query
  useEffect(() => {
    if (searchQuery.length < 2) {
      setCities([]);
      setShowDropdown(false);
      return;
    }

    setSearchLoading(true);
    const timer = setTimeout(() => {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=5&language=en&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setCities(data.results);
            setShowDropdown(true);
          } else {
            setCities([]);
            setShowDropdown(false);
          }
          setSearchLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
          setCities([]);
          setSearchLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchWeather = (city) => {
    setLoading(true);
    setShowDropdown(false);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({
          temperature: data.current_weather.temperature,
          windSpeed: data.current_weather.windspeed,
          weatherCode: data.current_weather.weathercode,
          time: data.current_weather.time,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setLoading(false);
      });
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchQuery(city.name);
    fetchWeather(city);
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2 className="weather-title">Weather App</h2>

        {/* Search Bar */}
        <div className="searchContainer">
          <Search size={20} className="weather-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a city..."
            className="searchInput"
          />
          {searchLoading && <Loader2 size={20} className="searchSpinner" />}
        </div>

        {/* Dropdown List */}
        {showDropdown && cities.length > 0 && (
          <div className="dropdown">
            {cities.map((city) => (
              <div
                key={city.id}
                onClick={() => handleCitySelect(city)}
                className="dropdownItem"
              >
                <MapPin size={16} className="weather-icon" />
                <div>
                  <p className="cityName">{city.name}</p>
                  <p className="cityInfo">
                    {city.country} {city.admin1 ? `• ${city.admin1}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected City Display */}
        {selectedCity && (
          <div className="selectedCity">
            <MapPin size={18} className="weather-icon" />
            <span>
              {selectedCity.name}, {selectedCity.country}
            </span>
          </div>
        )}

        {/* Weather Display */}
        {loading ? (
          <div className="loadingContainer">
            <Loader2 size={40} className="weather-spinner" />
            <p>Loading weather...</p>
          </div>
        ) : weatherData ? (
          <div className="weatherInfo">
            <div className="weatherItem">
              <Thermometer size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Temperature</p>
                <p className="weather-value">{weatherData.temperature}°C</p>
              </div>
            </div>
            <div className="weatherItem">
              <Wind size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Wind Speed</p>
                <p className="weather-value">{weatherData.windSpeed} km/h</p>
              </div>
            </div>
            <div className="weatherItem">
              <Clock size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Time</p>
                <p className="weather-value">{weatherData.time}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-placeholder">
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
}



export default WeatherApi;