import { useEffect, useState } from "react";
import { getWeather } from "./services/weatherApi";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeather(23.71, 90.41) // Dhaka
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>🌦️ Weather App</h1>
      <CurrentWeather hourly={weather.hourly} />
      <HourlyForecast hourly={weather.hourly} />
      <DailyForecast daily={weather.daily} />
    </div>
  );
}

export default App;
