import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

import Wallet from "./Wallet"
import Clock from './Clock'

const Nav = (props) => {

  return (
    <nav>
      <h1>Reactville</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/market'>Market</NavLink>
      <NavLink to='/burgers'>Burger Shop</NavLink>
      <Clock />
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav
