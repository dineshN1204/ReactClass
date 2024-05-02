import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  function changeCount() {
    setCount(count + 1)
  }

  return (
    <div>
      Count - {count}
      <button onClick={changeCount}>Increment count</button>
    </div>
  )
}

//Task 1
/*
const [count, setCount] = useState(0)
function countIncrement() {
  // setCount(prev => prev + 1)
  if(count!=10){
    setCount(count+1)
  }
  
}
function countDecrement() {
  // setCount(prev => prev - 1)
  if(count!=0){
    setCount(count-1)
  }

}

return (
  <div>
    Count - {count}
    <button onClick={countIncrement}>Increment</button>
    <button onClick={countDecrement}>Decrement</button>
  </div>
)
*/


// task2

// function Counter() {
//   let [changeSwitch, setChangeSwitch] = useState(["On", "Off"])
//   console.log(changeSwitch);
//   function toggleSwitch(){
//     if(changeSwitch == "Off"){
//       setChangeSwitch("On")
//     }
//     else{
//       setChangeSwitch("Off")
//     }
//   }


//   return (
//     <div>
//       <button onClick={toggleSwitch}>Toggle</button>
//     </div>
//   )

// }

export default Counter;



