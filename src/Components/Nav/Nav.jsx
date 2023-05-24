import { NavLink } from 'react-router-dom'

// Components
import Wallet from "./Wallet"
import WeatherStatus from "./WeatherStatus"

// Assets
import Hamburger from "../../assets/Hamburger.png"
import Logo from "../../assets/react-logo.png"

const Nav = ({ cash, weather }) => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo" /></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={cash} />
      <WeatherStatus weather={weather} />
      <img id="hamburger" src={Hamburger} alt="Hamburger symbol" />
    </nav>
  )
}

export default Nav