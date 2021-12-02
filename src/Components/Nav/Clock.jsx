import React from 'react'
import { useState, useEffect } from 'react'

const Clock = ({ daytime, setDaytime }) => {
  const [date, setDate] = useState(new Date())

  const getMinutes = (str) => {
    const timeArr = str.split(':')
    const suffix = str.split(' ')[1] === 'PM' ? 720 : 0
    if (timeArr[0] === '12') return suffix === 0 ? 0 : 720
    return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]) + suffix
  }

  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
  const currentTime = getMinutes(time)
  const sunrise = getMinutes('7:00 AM')
  const sunset = getMinutes('5:00 PM')

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
    return () => {
      if ((currentTime > sunrise) && (currentTime < sunset)) {
        if (!daytime) setDaytime(true)
      } else {
        if (daytime) setDaytime(false)
      }
    }
  }, [daytime, setDaytime, currentTime, sunrise, sunset])

  return (
    <p className="display-items">
      {date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}
    </p>
  )
}

export default Clock
