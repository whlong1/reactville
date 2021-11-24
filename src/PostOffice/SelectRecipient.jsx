import React from "react"

const SelectRecipient = (props) => {
  return (
    <label>Select A Recipient
      <select required name="recipient" onChange={props.handleChange}>
        {props.selectedBox?.boxHolders.map((name, idx) => (
          <option key={idx} value={name}>{name}</option>
        ))}
      </select>
    </label>
  )
}

export default SelectRecipient