import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Home from './Home'
import Nav from './Nav/Nav'
import Bank from './Bank/Bank'
import BurgerShop from './BurgerShop/BurgerShop'
import SuperMarket from './SuperMarket/SuperMarket'
import PostOffice from './PostOffice/PostOffice'

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
          element={<Home />}
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
