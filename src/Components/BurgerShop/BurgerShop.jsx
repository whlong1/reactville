import React, { useState } from 'react'
import '../../styles/burger.css'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const ingredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown', type: 'bun' },
    { name: 'Sesame Bun', color: 'sandybrown', type: 'bun' },
    { name: 'Gluten Free Bun', color: 'peru', type: 'bun' },
    { name: 'Lettuce Wrap', color: 'olivedrab', type: 'bun' },
    { name: 'Beef Patty', color: '#3F250B', type: 'patty' },
    { name: 'Soy Patty', color: '#3F250B', type: 'patty' },
    { name: 'Black Bean Patty', color: '#3F250B', type: 'patty' },
    { name: 'Chicken Patty', color: 'burlywood', type: 'patty' },
    { name: 'Lettuce', color: 'lawngreen', type: 'ing' },
    { name: 'Tomato', color: 'tomato', type: 'ing' },
    { name: 'Bacon', color: 'maroon', type: 'ing' },
    { name: 'Onion', color: 'lightyellow', type: 'ing' }
  ]

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} stack={stack} addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop



