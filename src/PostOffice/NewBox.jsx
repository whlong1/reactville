import React, { useState } from "react"

const NewBox = (props) => {
  let boxNumber = 0
  const [box, setBox] = useState({
    boxNo: boxNumber,
    owner: '',
  })
  console.log(box, setBox)

  return (
    <form>

    </form>
  )
}

export default NewBox