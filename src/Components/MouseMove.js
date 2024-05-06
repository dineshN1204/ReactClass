import React, {useState, useEffect } from 'react'

export default function MouseMove() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logPosition = (e) => {
        console.log('mouse is moving');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', logPosition)
    
    return () => {
        window.removeEventListener('mousemove', logPosition)
    }}, [])

    return (
        <div>
            mousemove
            X-{x} Y-{y}
        </div>
    )
}
