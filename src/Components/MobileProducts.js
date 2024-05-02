import React from 'react'

export default function MobileProducts(props) {
    if(props.name === 'Samsung'){
        throw new Error("This product is unavailable")
    }
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}
