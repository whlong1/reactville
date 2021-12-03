import React, { useState } from "react"
import ControlPanel from "./ControlPanel"

const Account = (props) => {
	const [balance, setBalance] = useState(0)
	const [message, setMessage] = useState('')
	const validDollarAmount = /^\d+(?:\.\d{0,2})?$/
  //https://regexlib.com/REDetails.aspx?regexp_id=543

	const handleBalance = (name, amount) => {
		try {
			const value = name === 'WITHDRAW' ? amount *= -1 : amount
			if (!validDollarAmount.test(Math.abs(value))) throw new Error('Please enter a valid number')
			if (name === 'WITHDRAW' && balance + amount < 0) throw new Error('Insufficient Funds')
			if (!props.handleExchange(value)) throw new Error('Not enough cash!')
			setBalance(balance + value)
			setMessage('')
		} catch (error) {
			setMessage(error.message)
		}
	}

	return (
		<div className="account">
			<h3>{props.name}</h3>
			<section><p>Balance: ${balance}</p><p>{message}</p></section>
			<ControlPanel handleBalance={handleBalance} />
		</div>
	)
}

export default Account