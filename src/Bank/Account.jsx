import { useState } from "react"


const Account = () => {
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)


    return (
        <div>
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter an amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input type="submit" value="Deposit" />
            </form>
        </div>
    )
}

export default Account