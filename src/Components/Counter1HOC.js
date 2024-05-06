import React, { useState } from 'react'
import UpdatedComponent from './HOC'

 function Counter1HOC(props) {
    const [count,setCount]=useState(0)
    const handleInc = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        {props.name}
        <button onClick={handleInc}>{count}</button>
    </div>
  )
}
export default UpdatedComponent(Counter1HOC)
