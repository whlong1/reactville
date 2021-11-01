import { useState } from 'react'

import './App.css'

// Components
import Neigborhood from './Neighborhood/Neighborhood'
import Nav from './Nav/Nav'
import SuperMarket from './SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(0)


  return (
    <main>
      <Nav cash={cash} setCash={setCash} />
      <SuperMarket/>
    </main>
  )
}

export default App
