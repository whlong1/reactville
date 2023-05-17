// Assets 
import sun from '../../assets/weather-icons/sun.svg'
import snow from '../../assets/weather-icons/snow.svg'
import rain from '../../assets/weather-icons/rain.svg'
import cloud from '../../assets/weather-icons/cloud.svg'
import flurry from '../../assets/weather-icons/flurry.svg'
import rainSnow from '../../assets/weather-icons/rain-snow.svg'
import sunCloud from '../../assets/weather-icons/sun-cloud.svg'
import lightRain from '../../assets/weather-icons/light-rain.svg'
import lightningRain from '../../assets/weather-icons/lightning-rain.svg'

const iconTable = {
  0: sun, // clear sky
  1: sun, // mostly clear
  2: sunCloud, // partly cloudy
  3: cloud, // cloudy
  45: cloud, // fog level 1
  48: cloud, // fog level 1
  51: lightRain, // drizzle 1
  53: lightRain, // drizzle 2
  55: lightRain, // drizzle 3
  56: lightRain, // drizzle 4
  57: lightRain, // drizzle 5
  61: rain, // light rain
  63: rain, // moderate rain
  65: rain, // heavy rain
  66: rainSnow, // freezing rain
  67: rainSnow, // freezing rain
  71: flurry, // light snowfall
  73: flurry, // moderate snowfall
  75: flurry, // heavy snowfall
  77: flurry, // snow grains
  80: rain, // light showers
  81: rain, // moderate showers
  82: rain, // heavy showers
  85: snow, // snow showers
  86: snow, // snow showers
  95: lightningRain, // thunderstorm 1
  96: lightningRain, // thunderstorm 2
  99: lightningRain, // thunderstorm 3
}

const WeatherStatus = ({ weather }) => {
  if (!weather) return <div className="display-items weather"></div>

  return (
    <div className="display-items weather">
      <p id="temperature">{weather.current_weather.temperature}°F</p>
      <img id="weatherIcon" src={iconTable[weather.current_weather.weathercode]} alt="Weather symbol" />
    </div>
  )
}

export default WeatherStatus