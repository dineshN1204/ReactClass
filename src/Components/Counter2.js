import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function Counter1() {
    const[count,inc,dec,reset]= useCounter(10,5)
  return (
    <div>
        {count}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
