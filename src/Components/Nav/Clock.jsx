import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
  }, [])

  return (
    <p className="display-items">
      {date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}
    </p>
  )
}

export default Clock
