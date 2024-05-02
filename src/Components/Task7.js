import React, { useEffect, useState } from 'react'

export default function Task7() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => { clearInterval(interval) }
  }, [timerOn])

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>Timer : {time} Seconds </h1>
      <button onClick={() => { setTimerOn(prevTimerOn => !prevTimerOn) }}>{timerOn ? 'Stop' : 'Start'}</button>
      <button onClick={() => {
        setTime(0)
        // setTimerOn(false)
      }}>Reset</button>
    </div>
  )
}
