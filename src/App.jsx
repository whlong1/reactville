import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './components/Nav/Nav'
import Bank from './components/Bank/Bank'
import Landing from './components/Landing/Landing'
import BurgerShop from './components/BurgerShop/BurgerShop'
import PostOffice from './components/PostOffice/PostOffice'
import SuperMarket from './components/SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)
  const [daytime, setDaytime] = useState(true)

  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <>
      <Nav cash={cash} setCash={setCash} daytime={daytime} setDaytime={setDaytime} />
      <main>
        <Routes>
          <Route path="/"
            element={<Landing daytime={daytime} />}
          />
          <Route path="/market"
            element={<SuperMarket handleExchange={handleExchange} />}
          />
          <Route path="/burgers"
            element={<BurgerShop />}
          />
          <Route path="/bank"
            element={<Bank handleExchange={handleExchange} />}
          />
          <Route path="/postoffice/*"
            element={<PostOffice handleExchange={handleExchange} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App