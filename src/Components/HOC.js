import React from 'react'

function UpdatedComponent(OriginalComponent) {
  function NewComponent(){
    return <OriginalComponent name='Adam'/>
  }
  return NewComponent
}

export default UpdatedComponent
