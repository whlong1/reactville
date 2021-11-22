import React, { useState } from "react"
import Button from "./Button"
import InputPad from './InputPad'


const ControlPanel = (props) => {
	const [amount, setAmount] = useState('')

	return (
		<div>
			{amount}
			<InputPad amount={amount} setAmount={setAmount} />
			<Button name="Deposit" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
			<Button name="Withdraw" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
		</div>
	)
}

export default ControlPanel