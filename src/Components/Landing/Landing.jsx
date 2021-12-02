import React from 'react'

import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'

const Landing = (props) => {

  const background = props.daytime ? Day : Night

  return (
    <div className="landing" style={{ backgroundImage: `url(${background})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing