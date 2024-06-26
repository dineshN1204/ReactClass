import React, { useState } from 'react'

function UpdatedComponents(OriginalComponent) {
  function NewComponent(props){
    const [count,setCount]=useState(0)
    const handleInc = ()=>{
        setCount(count+1)
    }
    return <OriginalComponent count={count} 
    handleInc={handleInc} {...props}/>
  }
  return NewComponent
}

export default UpdatedComponents
