import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => (
				<Ingredient list={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
			))}
		</ul>
	)
}

export default IngredientList