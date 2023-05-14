import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Wallet from "./Wallet"
import Clock from './Clock'
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {


  const getWeatherInfo = async () => {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      const BASE_URL = 'https://api.open-meteo.com/v1/gfs'
      const coordinates = `latitude=${latitude}&longitude=${longitude}`
      const parameters = 'current_weather=true&temperature_unit=fahrenheit&timezone=auto&windspeed_unit=mph&daily=sunrise,sunset&utc_offset_seconds'
      const res = await fetch(`${BASE_URL}?${coordinates}&${parameters}`)
      const data = await res.json()
      console.log(data)
    })
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])



  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo" /></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={props.cash} />
      <Clock daytime={props.daytime} setDaytime={props.setDaytime} />
    </nav>
  )
}

export default Nav