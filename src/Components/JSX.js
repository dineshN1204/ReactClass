import React from 'react'
import './style.css'

export default function JSX(props) {
    let styles = props.admin?'primary':'secondary'

    //Inline css
    let colors = {
        color: 'green',
        backgroundColor : 'orange',
        fontSize : '100px'
    }

  return (
    <div>
        <h1 className={`${styles} font-xl`}>Props Welcome</h1>
        <h1 style={colors}>Welcome</h1>
    </div>
  )
}
