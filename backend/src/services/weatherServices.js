import axios from 'axios';

// Fungsi untuk mengambil data cuaca berdasarkan kota
const getWeatherByCity = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description,
      weatherCode: response.data.weather[0].id,
    };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

export { getWeatherByCity };