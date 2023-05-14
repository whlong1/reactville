import { useState, useEffect } from 'react'
import { getWeatherDataFromAPI } from '../../services/weatherService'

const WeatherStatus = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const getWeatherInfo = async () => {
      navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
        const data = await getWeatherDataFromAPI(latitude, longitude)
        setWeather(data)
      })
    }
    getWeatherInfo()
  }, [])

  if (!weather) return <img className="display-items" src="" alt="" />

  return (
    <p className="display-items">{weather.current_weather.weathercode}</p>
  )
}

export default WeatherStatus