import { useState } from 'react'

import './App.css'

// Components
// import Neigborhood from './Neighborhood/Neighborhood'
import Nav from './Nav/Nav'
import SuperMarket from './SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)

  const handlePurchase = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  const dayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const idx = new Date().getDay()
    return days[idx]
  }

  console.log(dayOfWeek())


  return (
    <main>
      {cash}
      {/* <Nav cash={cash} setCash={setCash} /> */}
      <SuperMarket handlePurchase={handlePurchase} />
    </main>
  )
}

export default App
