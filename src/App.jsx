import { useState } from 'react'

import './App.css'

// Components
// import Neigborhood from './Neighborhood/Neighborhood'
import Nav from './Nav/Nav'
import SuperMarket from './SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(0)


  const dayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const idx = new Date().getDay()
    return days[idx]
  }

  console.log(dayOfWeek())


  return (
    <main>
      {/* <Nav cash={cash} setCash={setCash} /> */}
      <SuperMarket />
    </main>
  )
}

export default App
