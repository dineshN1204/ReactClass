import React, { useState } from 'react'

function Increment5() {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1)
        }
    }
    return (
        <div>
            Count - {count}
            <button onClick={changeCount}>Increment by 5</button>
        </div>
    )
}

export default Increment5;