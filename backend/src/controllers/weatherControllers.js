import { getWeatherByCity } from "../services/weatherServices.js";

// Controller untuk endpoint /weather
const getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const weatherData = await getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getWeather };