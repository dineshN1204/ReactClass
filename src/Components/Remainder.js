import React, { useEffect, useState } from 'react'

export default function Remainder() {
    const [time, setTime] = useState(new Date())
    const [val, setVal] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    useEffect(() => {
        const timeString = time.toLocaleTimeString()
        if (timeString === '12:17:30 PM') {
            setVal('Go to Lunch')
        }
    }, [time])
    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
            <h3>{val}</h3>
        </div>
    )
}
