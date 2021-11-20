import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

// Components
import Nav from './Nav/Nav'
import SuperMarket from './SuperMarket/SuperMarket'
import Home from './Home'

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

      </Routes>

    </main>
  )
}

export default App
