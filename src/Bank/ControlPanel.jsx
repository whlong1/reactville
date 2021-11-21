import React, { useState } from "react"

const ControlPanel = (props) => {
	const [amount, setAmount] = useState(0)

	return (
		<form name={props.name} onSubmit={(e) => {
			e.preventDefault()
			props.handleBalance(props.name, parseInt(amount))
			setAmount(0)
		}}>
			<input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} />
			<button type="submit">{props.name}</button>
		</form>
	)
}

export default ControlPanel