import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Wallet from "./Wallet"
import WeatherStatus from "./WeatherStatus"
import NavigationLinks from './NavigationLinks'

// Assets
import Logo from "../../assets/react-logo.png"
import Hamburger from "../../assets/Hamburger.png"

const Nav = ({ cash, weather }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const toggleMenu = () => setShowMobileMenu((prev) => !prev)

  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo" /></NavLink>
      <NavigationLinks />
      <Wallet cash={cash} />
      <WeatherStatus weather={weather} />

      {showMobileMenu &&
        <div id="mobile-overlay">
          <menu onClick={toggleMenu}>
            <NavigationLinks />
          </menu>
        </div>
      }

      <img
        id="hamburger"
        src={Hamburger}
        alt="Hamburger symbol"
        onClick={toggleMenu}
      />

    </nav>
  )
}

export default Nav