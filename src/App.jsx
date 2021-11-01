import { useState } from 'react'

import './App.css'

// Components
import Neigborhood from './Neighborhood/Neighborhood'
import Nav from './Nav/Nav'


const App = () => {
  const [cash, setCash] = useState(0)


  return (
    <main>
      <Nav cash={cash} setCash={setCash} />
    </main>
  )
}

export default App
