import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length ?
        props.ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            idx={idx}
            ingredient={ingredient}
            removeFromBurger={props.removeFromBurger}
          />
        ))
        :
        <div>
          No Ingredients
        </div>
      }
    </ul>
  )
}

export default BurgerStack