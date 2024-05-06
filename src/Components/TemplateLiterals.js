import React from 'react'

export default function TemplateLiterals() {
    let a = "Adam"
    console.log("hello" + a);

    let b = "John"
    console.log(`Hello ${b}`);
    return (
    <div>
        <h1>Hello {a}</h1>
        <h1>Hello {b}</h1>
    </div>
  )
}
