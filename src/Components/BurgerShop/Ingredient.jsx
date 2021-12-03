import React from "react"

const Ingredient = (props) => {
	return (
		props.disabled ?
			<li style={{ background: 'darkgray' }}>
				{props.ingredient.name}
				{!props.list && <button onClick={() => props.removeFromBurger(props.idx)}>X</button>}
			</li>
			:
			<li style={{ background: props.ingredient.color }}>
				{props.ingredient.name}
				{props.list ?
					<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
					:
					<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
				}
			</li>
	)
}

export default Ingredient