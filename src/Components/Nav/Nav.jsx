import React from 'react'
import { NavLink } from 'react-router-dom'

import Wallet from "./Wallet"
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {

  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo"/></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav
