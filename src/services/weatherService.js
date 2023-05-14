const BASE_URL = 'https://api.open-meteo.com/v1/gfs'
const parameters = 'current_weather=true&temperature_unit=fahrenheit&timezone=auto&windspeed_unit=mph&daily=sunrise,sunset&utc_offset_seconds'

export const getWeatherDataFromAPI = async (latitude, longitude) => {
  try {
    const coordinates = `latitude=${latitude}&longitude=${longitude}`
    const res = await fetch(`${BASE_URL}?${coordinates}&${parameters}`)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}