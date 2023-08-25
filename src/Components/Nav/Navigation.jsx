import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Wallet from "./Wallet"
import MobileNav from './MobileNav'
import WeatherStatus from "./WeatherStatus"
import NavigationLinks from './NavigationLinks'

// Assets
import Logo from "../../assets/react-logo.png"

const Navigation = ({ cash, weather }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const toggleMenu = () => setShowMobileMenu((prev) => !prev)

  useEffect(() => {
    window.addEventListener('resize', () => setShowMobileMenu(false))
  }, [])

  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/' onClick={() => setShowMobileMenu(false)}>
        <img src={Logo} alt="react-logo" />
      </NavLink>
      <NavigationLinks />
      <Wallet cash={cash} />
      <WeatherStatus weather={weather} />
      <MobileNav showMobileMenu={showMobileMenu} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Navigation