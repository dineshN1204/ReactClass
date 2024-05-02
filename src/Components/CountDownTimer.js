import React, { useEffect, useState } from 'react'

export default function CountDownTimer() {
    const [inp, setInp] = useState('')
    const [val, setVal] = useState(false)

    useEffect(() => {
        let interval
        if (val) {
            interval = setInterval(() => {
                setInp(prev => prev - 1)
            }, 1000)

        }
        return () => {
    
            clearInterval(interval)
        }
    }, [val])

    return (
        <div>
            <h1>CountDownTimer : {inp} Seconds</h1>
            {val ? (<input type='text' disabled={true} />) : 
            (<input type='text' onChange={(e) => { setInp(e.target.value) }} disable={false} />)}

            {val ? (<button onClick={() => {
                setVal(false)
            }}>Stop</button>) : <button onClick={() => { setVal(true) }} >Start</button>}
            <button onClick={() => { setInp(inp) }}>Reset</button>
        </div>
    )
}
