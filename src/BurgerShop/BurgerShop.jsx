import React, { useState } from 'react'
import './burger.css'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'


const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const ingredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }


  return (
    <div className="burger-shop">
      <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
      <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      <button onClick={() => setStack([])}>Clear Order</button>
    </div>
  )
}

export default BurgerShop



