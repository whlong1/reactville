import React from 'react'

import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'


const Landing = (props) => {
  
  const getMinutes = (str) => {
    const timeArr = str.split(':')
    const suffix = str.split(' ')[1] === 'PM' ? 720 : 0
    if (timeArr[0] === '12') return suffix === 0 ? 0 : 720
    return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]) + suffix
  }
  
  const date = new Date()
  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
  const currentTime = getMinutes(time)
  const sunrise = getMinutes('7:00 AM')
  const sunset = getMinutes('5:00 PM')

  const handleBackground = () => (currentTime > sunrise) && (currentTime < sunset) ? Day : Night

  return (
    <div className="landing" style={{ backgroundImage: `url(${handleBackground()})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing









