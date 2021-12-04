import React from 'react'
import { useState, useEffect } from 'react'
import { getMinutes } from '../../modules/functions'

const Clock = ({ daytime, setDaytime }) => {
  const [date, setDate] = useState(new Date())

  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
  const currentTime = getMinutes(time)

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
    if ((currentTime > 420) && (currentTime < 1020)) {
      if (!daytime) setDaytime(true)
    } else {
      if (daytime) setDaytime(false)
    }
  }, [daytime, setDaytime, currentTime])

  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock
