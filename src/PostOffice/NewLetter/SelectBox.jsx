import React from "react"

const SelectBox = (props) => {
  return (
    <select required name="boxNo" onChange={(e) => props.setBoxNum(e.target.value)}>
      <option value="">SELECT PO BOX</option>
      {props.boxNumbers.map((num) => (
        <option key={num} value={num}>PO BOX {num}</option>
      ))}
    </select>
  )
}

export default SelectBox