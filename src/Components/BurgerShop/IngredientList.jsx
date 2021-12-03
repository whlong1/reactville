import React, { useEffect, useState } from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(props.stack.filter(el => el.type === 'bun').length === 2)
	}, [props.stack])
	
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => {
				if (hasBuns && ingredient.type === 'bun') {
					return <Ingredient list={true} disabled={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
				}
				return <Ingredient list={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
			})}
		</ul>
	)
}

export default IngredientList