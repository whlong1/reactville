import React, { useState } from "react"
import ControlPanel from "./ControlPanel"


const Account = (props) => {
	const [balance, setBalance] = useState(0)
	const [message, setMessage] = useState('')

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
		<div className="account">
			<h4>{props.name}</h4>
			<p>Balance: ${balance} {message}</p>
			<ControlPanel handleBalance={handleBalance} />
		</div>
	)
}

export default Account