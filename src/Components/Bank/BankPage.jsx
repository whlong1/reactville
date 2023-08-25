import '../../styles/bank.css'

import Account from "./Account"

const BankPage = (props) => {
	return (
		<div className="bank">
			<nav><h1>Bank</h1></nav>
			<section>
				<Account name="Checking" handleExchange={props.handleExchange} />
				<Account name="Savings" handleExchange={props.handleExchange} />
			</section>
		</div>
	)
}

export default BankPage