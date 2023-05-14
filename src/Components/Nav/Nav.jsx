import { NavLink } from 'react-router-dom'

// Components
import Clock from './Clock'
import Wallet from "./Wallet"
import WeatherStatus from './WeatherStatus'
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {

  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo" /></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={props.cash} />
      <Clock daytime={props.daytime} setDaytime={props.setDaytime} />
      <WeatherStatus />
    </nav>
  )
}

export default Nav