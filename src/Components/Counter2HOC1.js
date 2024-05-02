import React from 'react'
import UpdatedComponents from './HOC1'

 function Counter2HOC1(props) {
  return (
    <div>
        {props.name}
        <button onMouseOver={props.handleInc}>{props.count}</button>
    </div>
  )
}
export default UpdatedComponents(Counter2HOC1)
