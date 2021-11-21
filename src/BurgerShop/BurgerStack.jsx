import React from "react"
import Ingredient from "./Ingredient"


const BurgerStack = (props) => {


  return (
    <div>
      {props.ingredients?.map((ingredient, idx) => (
        <Ingredient key={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} idx={idx}/>
      ))}
    </div>
  )
}

export default BurgerStack