import { useState, useEffect } from "react";

function WeatherSimple() {
    const cityCoords = {
    "cairo": { lat: 30.0444, lon: 31.2357, timezone: "Africa/Cairo" },
    "london": { lat: 51.5074, lon: -0.1278, timezone: "Europe/London" },
    "paris": { lat: 48.8566, lon: 2.3522, timezone: "Europe/Paris" },
    "new york": { lat: 40.7128, lon: -74.0060, timezone: "America/New_York" },
    "riyadh": { lat: 24.7136, lon: 46.6753, timezone: "Asia/Riyadh" },
    "tokyo": { lat: 35.6762, lon: 139.6503, timezone: "Asia/Tokyo" },
    "dubai": { lat: 25.2048, lon: 55.2708, timezone: "Asia/Dubai" },
    "sydney": { lat: -33.8688, lon: 151.2093, timezone: "Australia/Sydney" }
  };

  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [timezone, setTimezone] = useState("");
  const [selectedCity, setSelectedCity] = useState(cityCoords);

  useEffect(() => {
    if (!selectedCity) return;
    const coords = cityCoords[selectedCity];
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.current_weather.temperature);
        setWindSpeed(data.current_weather.windspeed);
        setTimezone(coords.timezone);
      });
  }, [selectedCity]);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        {(cityCoords).map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            style={{ marginRight: '0.5rem', padding: '0.5rem 1rem' }}
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>
      {selectedCity && (
        <div>
          <h3>Weather in {selectedCity}</h3>
          <p>Temperature: {temperature} °C</p>
          <p>Wind Speed: {windSpeed} km/h</p>
          <p>Timezone: {timezone}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherSimple;
