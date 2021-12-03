import React, { useEffect, useState } from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(props.stack.some(el => el.type === 'bun'))
	}, [props.stack])
	
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => {
				if(hasBuns && ingredient.type === 'buns') { return }
				return <Ingredient list={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
			})}
		</ul>
	)
}

export default IngredientList