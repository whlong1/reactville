import React, { useState } from "react"

const BoxForm = (props) => {
  let boxNumber = 0
  const [box, setBox] = useState({
    boxNo: boxNumber,
    owner: '',
  })


  //limit on box?

  // const handleChange = (e) => {
  //   setLetter({ ...letter, [e.target.name]: e.target.value })
  // }

  return (
    <form>

    </form>
  )
}

export default BoxForm