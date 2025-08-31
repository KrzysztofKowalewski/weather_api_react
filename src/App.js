import logo from './app_logo.png';
import './App.css';
import { useState } from 'react';
import { getWeatherByCity } from './api';
import SearchBar from './components/SearchBar.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';



function App() {
  
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try{
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };
  
  return (
    <div className="App">
      <header>Weather Checker</header>
      <img src={logo} className='app_logo' alt="logo"/>
      <SearchBar 
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />
      {error && <p style={{color: "red" }}>{error}</p>}
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
}

export default App;
