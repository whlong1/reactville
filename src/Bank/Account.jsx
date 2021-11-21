import React, { useState } from "react"
import ControlPanel from "./ControlPanel"


const Account = (props) => {
	const [balance, setBalance] = useState(0)
	const [message, setMessage] = useState('Welcome') //greeting based on time

	const handleBalance = (name, amount) => {
		try {
			const value = name === 'Withdraw' ? amount *= -1 : amount
			if (name === 'Withdraw' && balance + value < 0) throw 'Insufficient Funds'
			if (!props.handleExchange(value)) throw 'Not enough cash!'
			setBalance(balance + value)
			setMessage('')
		} catch (error) {
			setMessage(error)
		}
	}

	return (
		<div>
			<h4>{props.name}</h4>
			<p>Balance: {balance}</p>
			<p>{message}</p>
			<ControlPanel name="Deposit" handleBalance={handleBalance} />
			<ControlPanel name="Withdraw" handleBalance={handleBalance} />
		</div>
	)
}

export default Account