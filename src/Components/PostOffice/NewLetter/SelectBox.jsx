const SelectBox = (props) => {
  return (
    <select required name="boxNo" onChange={(e) => props.setBoxNum(e.target.value)}>
      <option value="">Select PO Box</option>
      {props.boxNumbers.map((num) => (
        <option key={num} value={num}>PO Box {num}</option>
      ))}
    </select>
  )
}

export default SelectBox