import React, { useState } from 'react'
import MouseMove from './MouseMove'
export default function Unmounted() {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
            {toggle && <MouseMove />}
        </div>
    )
}
