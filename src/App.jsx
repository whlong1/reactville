import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './components/Nav/Nav'
import Bank from './components/Bank/Bank'
import Landing from './components/Landing/Landing'
import BurgerShop from './components/BurgerShop/BurgerShop'
import PostOffice from './components/PostOffice/PostOffice'
import SuperMarket from './components/SuperMarket/SuperMarket'

// Services
import { getWeatherDataFromAPI } from './services/weatherService'

const App = () => {
  const [cash, setCash] = useState(100)
  const [weather, setWeather] = useState(null)

  const currentTime = new Date().getTime()
  const sunset = new Date(weather?.daily.sunset[0]).getTime()
  const sunrise = new Date(weather?.daily.sunrise[0]).getTime()
  const isDay = currentTime > sunrise && currentTime < sunset

  useEffect(() => {
    const getWeatherInfo = async () => {
      navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
        const data = await getWeatherDataFromAPI(latitude, longitude)
        setWeather(data)
      })
    }
    getWeatherInfo()
  }, [])

  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <>
      <Nav cash={cash} setCash={setCash} weather={weather} />
      <main>
        <Routes>
          <Route path="/"
            element={<Landing isDay={isDay} />}
          />
          <Route path="/market"
            element={<SuperMarket handleExchange={handleExchange} />}
          />
          <Route path="/burgers"
            element={<BurgerShop />}
          />
          <Route path="/bank"
            element={<Bank handleExchange={handleExchange} />}
          />
          <Route path="/postoffice/*"
            element={<PostOffice handleExchange={handleExchange} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App