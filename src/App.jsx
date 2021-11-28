import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Bank from './Components/Bank/Bank'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import PostOffice from './Components/PostOffice/PostOffice'

const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    console.log(amt)
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <main>
      <Nav cash={cash} setCash={setCash} />
      <Routes>
        <Route path="/"
          element={<div className="landing"><h1 id="splash-logo">Reactville</h1></div>}
        />
        <Route path="/market"
          element={<SuperMarket handleExchange={handleExchange} />}
        />
        <Route path="/burgers"
          element={<BurgerShop handleExchange={handleExchange} />}
        />
        <Route path="/bank"
          element={<Bank handleExchange={handleExchange} />}
        />
        <Route path="/postoffice/*"
          element={<PostOffice handleExchange={handleExchange} />}
        />
      </Routes>
    </main>
  )
}

export default App
