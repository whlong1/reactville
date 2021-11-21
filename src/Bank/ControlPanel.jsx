import React, { useState } from "react"
import Button from "./Button"

const ControlPanel = (props) => {
	const [amount, setAmount] = useState(0)

	return (
		<>
			<input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} />
			<Button name="Deposit" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
			<Button name="Withdraw" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance}  />
		</>
	)
}

export default ControlPanel