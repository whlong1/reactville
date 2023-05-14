import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Clock from './Clock'
import Wallet from "./Wallet"
import Logo from '../../assets/react-logo.png'

// Services
import { getWeatherDataFromAPI } from '../../services/weatherService'

const Nav = (props) => {

  const getWeatherInfo = async () => {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      const data = await getWeatherDataFromAPI(latitude, longitude)
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