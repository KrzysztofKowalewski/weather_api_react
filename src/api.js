const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCity(city) {
  const url = `${BASE_URL}?q=${city}&units=metric&lang=pl&appid=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Nie znaleziono miasta");

  return await response.json();
}
