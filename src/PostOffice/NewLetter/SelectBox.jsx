import React from "react"

const SelectBox = (props) => {
  return (
    <label>Select a PO BOX
      <select required name="boxNo" onChange={(e) => props.setBoxNum(e.target.value)}>
        {props.boxNumbers.map((num) => (
          <option key={num} value={num}>PO BOX {num}</option>
        ))}
      </select>
    </label>
  )
}

export default SelectBox