import React from 'react'
import '../App.css'

import Wallet from "./Wallet"
import Clock from './Clock'

const Nav = (props) => {

  return (
    <nav>
      <h1>Reactville</h1>
      <Clock />
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav
