import React, { useContext } from 'react'
import { CounterContext } from './UseContextReducer'

export default function D1() {
    const counter = useContext(CounterContext)
    return (
        <div>D1
            <br />
            <button onClick={()=>{counter.dispatch('inc1')}}>+</button>
        <button onClick={()=>{counter.dispatch('dec1')}}>-</button>
        <button onClick={()=>{counter.dispatch('reset')}}>Reset</button>
        </div>
    )
}
