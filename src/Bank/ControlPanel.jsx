import React, { useState } from "react"
import Button from "./Button"
import InputPad from './InputPad'


const ControlPanel = (props) => {
	const [amount, setAmount] = useState('')

	return (
		<div>
			<div id="input-display">{amount}</div>
			<InputPad amount={amount} setAmount={setAmount} />
			<Button name="Deposit" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
			<button onClick={() => setAmount('')}>Clear</button>
			<Button name="Withdraw" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
		</div>
	)
}

export default ControlPanel