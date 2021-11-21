import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

// Components
import Home from './Home'
import Nav from './Nav/Nav'
import BurgerShop from './BurgerShop/BurgerShop'
import SuperMarket from './SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)

  const handlePurchase = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  console.log('render')

  return (
    <main>
      <Nav cash={cash} setCash={setCash} />
      <Routes>
        <Route path="/"
          element={<Home />}
        />
        <Route path="/market"
          element={<SuperMarket handlePurchase={handlePurchase} />}
        />
        <Route path="/burgers"
          element={<BurgerShop handlePurchase={handlePurchase} />}
        />

      </Routes>

    </main>
  )
}

export default App
