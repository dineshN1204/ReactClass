import useInput from "../Hooks/useInput"
import React from "react"

export default function Input() {
  const[input,bind,reset]=useInput()
  const[input1,bind1,reset1]=useInput()
    return (
    <div>
        <input type='text' {...bind}/>
        <button onClick={()=>{alert(input)}}>Submit</button>
        <button onClick={reset}>Reset</button> 
        <br></br>
        {input1}
        <input type='text' {...bind1}></input>
        <button>Reset</button>
    </div> 
    )
}
