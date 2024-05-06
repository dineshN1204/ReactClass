import React, { useContext } from 'react'
import { CounterContext } from './UseContextReducer'

export default function F1() {
    const counter = useContext(CounterContext)
  return (
    <div>F1
        <br/>
        <button onClick={()=>{counter.dispatch('inc1')}}>+</button>
        <button onClick={()=>{counter.dispatch('dec1')}}>-</button>
        <button onClick={()=>{counter.dispatch('reset')}}>Reset</button>
    </div>
  )
}
