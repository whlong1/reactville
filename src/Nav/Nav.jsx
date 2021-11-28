import React from 'react'
import { NavLink } from 'react-router-dom'

import Wallet from "./Wallet"

const Nav = (props) => {

  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'>Reactville</NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav
