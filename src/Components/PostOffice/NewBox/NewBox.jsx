import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"

const NewBox = (props) => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('')
  const [boxHolders, setBoxHolders] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const costOfBox = boxHolders.length * 10
  const fullName = firstName + ' ' + lastName

  const handleSubmit = () => {
    if (props.createBox(boxHolders, costOfBox)) {
      setStatus('Success')
      handleRedirect()
    } else {
      setStatus('Payment Failed')
    }
  }

  const handleRedirect = () => setTimeout(() => navigate('/postoffice', { replace: true }), 2000)

  const addBoxHolder = () => {
    if (!boxHolders.includes(fullName)) {
      setBoxHolders([...boxHolders, fullName])
      setFirstName('')
      setLastName('')
    } else {
      setStatus('Duplicate Name')
      setFirstName('')
      setLastName('')
    }
  }

  const removeBoxHolder = (name) => setBoxHolders(boxHolders.filter((holder) => holder !== name))

  if (status) return (
    <div className="status-msg">
      <h3>{status}</h3>
      {status !== 'Success' && <button onClick={() => setStatus('')}>Return</button>}
    </div>
  )

  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: ${costOfBox}</p>
        <button id="submit-box-btn" disabled={!boxHolders.length} onClick={handleSubmit}>SUBMIT</button>
      </header>

      <section>
        <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
        <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button id="add-boxholder" disabled={!firstName || !lastName} onClick={addBoxHolder}>ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox