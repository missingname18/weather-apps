import { useEffect, useState } from "react";
import CardCuaca from "../fragments/CardCuaca";
import getGeolocation from "../../utils/getGeolocation";
import { getDataByCity } from "../../services/fetchData";
import SearchForm from "../fragments/SearchForm";

interface WeatherData {
  city: string;
  temperature: number;
  weather: string;
  weatherCode: number;
}

function MainContent() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const geolocation = await getGeolocation();
        if (geolocation) {
          const weatherData = await getDataByCity(geolocation.city);
          setData(weatherData);
        }
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };
    fetchInitialData();
  }, []);

  const handleSubmitSearchCity = async (city: string) => {
    try {
      const weatherData = await getDataByCity(city);
      setData(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  
  return (
    <div>
      <SearchForm data={city} setData={setCity} onSubmit={(e) => {
        e.preventDefault();
        handleSubmitSearchCity(city);
      }} /> 

      {data ? (
        <CardCuaca
          city={data.city}
          temperature={data.temperature}
          weather={data.weather}
          weatherCode={data.weatherCode}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MainContent;