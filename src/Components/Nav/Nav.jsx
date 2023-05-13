import { NavLink } from 'react-router-dom'

import { useEffect } from 'react'

import Wallet from "./Wallet"
import Clock from './Clock'
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {


  const getWeatherInfo = async () => {
    const testURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
    const res = await fetch(testURL)
    const data = await res.json()
    console.log(data)
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