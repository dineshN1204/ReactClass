import React from 'react'
import UpdatedComponents from './HOC1'

 function Counter1HOC1(props) {

  return (
    <div>{props.name}
    <button onClick={props.handleInc}>{props.count}</button></div>
  )
}
export default UpdatedComponents(Counter1HOC1)
