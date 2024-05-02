import React, { useState } from 'react'
import UpdatedComponent from './HOC'

 function Counter2HOC(props) {
    const [count,setCount]=useState(0)
    const handleInc = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onMouseOver={handleInc}>{count}</button>
    </div>
  )
}
export default UpdatedComponent(Counter2HOC)
