import { useState, useEffect } from 'react'

const getMinutes = (str) => {
  const timeArr = str.split(':')
  const suffix = str.split(' ')[1] === 'PM' ? 720 : 0
  if (timeArr[0] === '12') return suffix === 0 ? 0 : 720
  return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]) + suffix
}

const Clock = ({ daytime, setDaytime }) => {
  const [date, setDate] = useState(new Date())
  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
  const currentTime = getMinutes(time)

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
    if ((currentTime > 420) && (currentTime < 1020)) {
      setDaytime(true)
    } else {
      setDaytime(false)
    }
  }, [setDaytime, currentTime])

  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock
