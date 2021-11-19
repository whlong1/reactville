import { useState } from 'react'

import './App.css'

// Components
import Nav from './Nav/Nav'
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
      <SuperMarket handlePurchase={handlePurchase} />
    </main>
  )
}

export default App
