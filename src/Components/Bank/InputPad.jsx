import React from "react"

const InputPad = ({ amount, setAmount }) => {

  return (
    <div className="number-pad">
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>1</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>2</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>3</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>4</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>5</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>6</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>7</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>8</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>9</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>.</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>0</button>
      <button onClick={(e) => setAmount(amount + e.target.innerText)}>00</button>
    </div>
  )
}

export default InputPad