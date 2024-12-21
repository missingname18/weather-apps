import styles from './styles/CardCuaca.module.css'


interface CardCuacaProps {
  city: string;
  temperature: number;
  weather: string;
  weatherCode: number;
}

const CardCuaca: React.FC<CardCuacaProps> = ({ city, temperature, weather, weatherCode }) => {
  
  const weatherIcons = {
    200: "/heavy_rain.svg",
    300: "/heavy_rain.svg",
    500: "/heavy_rain.svg",
    600: "/heavy_rain.svg",
    700: "/heavy_rain.svg",
    800: "/day_sunny.svg",
    801: "/overcast.svg",
    802: "/partly_cloudy.svg",
    803: "/overcast.svg",
    804: "/overcast.svg"
};

  const getWeatherIcon = (weatherCode : number) => {
    
    if (weatherCode >= 200 && weatherCode <= 232) return weatherIcons[200];
    if (weatherCode >= 300 && weatherCode <= 321) return weatherIcons[300];
    if (weatherCode >= 500 && weatherCode <= 531) return weatherIcons[500];
    if (weatherCode >= 600 && weatherCode <= 622) return weatherIcons[600];
    if (weatherCode >= 701 && weatherCode <= 781) return weatherIcons[700];
    if (weatherCode === 800) return weatherIcons[800];
    if (weatherCode >= 801 && weatherCode <= 804) return weatherIcons[801];
    return;
  }



  return (
    <div className={styles.container}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
      }}>{city}</h2>
      <img src={getWeatherIcon(weatherCode)} alt="" className={styles.img}/>
      <p>{Math.floor(temperature)}°C</p>
      <p>{weather}</p>
    </div>
  );
};

export default CardCuaca;