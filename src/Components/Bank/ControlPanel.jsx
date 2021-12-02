import React, { useState } from "react"
import Button from "./Button"
import InputPad from './InputPad'

const ControlPanel = (props) => {
	const [amount, setAmount] = useState('')

	return (
		<div className="control-panel">
			<div id="input-display">{amount}</div>
			<InputPad amount={amount} setAmount={setAmount} />
			<section>
				<Button name="DEPOSIT" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
				<button onClick={() => setAmount('')}>CLEAR</button>
				<Button name="WITHDRAW" amount={amount} setAmount={setAmount} handleBalance={props.handleBalance} />
			</section>
		</div>
	)
}

export default ControlPanel