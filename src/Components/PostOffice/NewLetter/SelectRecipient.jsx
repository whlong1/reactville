const SelectRecipient = (props) => {
  return (
    <select required name="recipient" onChange={props.handleChange}>
      <option value="">Select Recipient</option>
      {props.selectedBox?.boxHolders.map((name, idx) => (
        <option key={idx} value={name}>{name}</option>
      ))}
    </select>
  )
}

export default SelectRecipient