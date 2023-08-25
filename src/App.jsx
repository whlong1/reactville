import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Navigation from './components/Nav/Navigation'
import BankPage from './components/Bank/BankPage'
import LandingPage from './components/Landing/LandingPage'
import BurgerShopPage from './components/BurgerShop/BurgerShopPage'
import PostOfficePage from './components/PostOffice/PostOfficePage'
import SuperMarketPage from './components/SuperMarket/SuperMarketPage'

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
      <Navigation cash={cash} setCash={setCash} weather={weather} />
      <main>
        <Routes>
          <Route path="/"
            element={<LandingPage isDay={isDay} />}
          />
          <Route path="/market"
            element={<SuperMarketPage handleExchange={handleExchange} />}
          />
          <Route path="/burgers"
            element={<BurgerShopPage />}
          />
          <Route path="/bank"
            element={<BankPage handleExchange={handleExchange} />}
          />
          <Route path="/postoffice/*"
            element={<PostOfficePage handleExchange={handleExchange} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App