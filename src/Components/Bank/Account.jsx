import React, { useState } from "react"
import ControlPanel from "./ControlPanel"

const Account = (props) => {
	const [balance, setBalance] = useState(0)
	const [message, setMessage] = useState('')
	const validDollarAmount = /^\d+(?:\.\d{0,2})?$/
	//https://regexlib.com/REDetails.aspx?regexp_id=543

	const validateNum = (value) => !validDollarAmount.test(Math.abs(value))
	const checkFunds = (name, amt) => name === 'WITHDRAW' && balance + amt < 0

	const handleChecks = (name, amount, value) => {
		if (validateNum(value)) throw new Error('Please enter a valid number')
		if (checkFunds(name, amount)) throw new Error('Insufficient Funds')
		if (!props.handleExchange(value)) throw new Error('Not enough cash!')
	}
	const handleBalance = (name, amount) => {
		try {
			const value = name === 'WITHDRAW' ? amount *= -1 : amount
			handleChecks(name, amount, value)
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
			<ControlPanel handleBalance={handleBalance} setMessage={setMessage} />
		</div>
	)
}

export default Account