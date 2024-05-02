import React, { useEffect, useState } from 'react'

export default function UseEffectDependency() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('component is mounted');
    }, [name, count])
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Clicked {count} times</button>
            <button onClick={(e) => { setCount1(count1 + 1) }}>Clicked {count1} times</button>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
        </div> 
    )
}
