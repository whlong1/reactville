import Ingredient from "./Ingredient"

const BurgerStack = (props) => {

  if (!props.ingredients.length) return <ul className="burger-stack empty">No Ingredients</ul>

  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          idx={idx}
          ingredient={ingredient}
          removeFromBurger={props.removeFromBurger}
        />
      ))}
    </ul>
  )
}

export default BurgerStack