import React, { useState } from "react";

//03/04/2024
function Task1() {
  const [count, setCount] = useState(0);
  function countIncrement() {
    // setCount(prev => prev + 1)
    if (count != 10) {
      setCount(count + 1);
    }
  }
  function countDecrement() {
    // setCount(prev => prev - 1)
    if (count != 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      Count - {count}
      <button onClick={countIncrement}>Increment</button>
      <button onClick={countDecrement}>Decrement</button>
    </div>
  );
}

export default Task1;
