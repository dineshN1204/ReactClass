import React, { useState } from "react";

export default function Task9UseReducer() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isCount1, setIsCount1] = useState(false);
  const [isCount2, setIsCount2] = useState(false);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {isCount1 && (
        <div>
            <li>
          Product A - Quantity : {count1}
          <button onClick={()=>{setIsCount1(false)}}>Remove</button>
          <button onClick={()=>{setCount1(count1-1)}}>Decrease</button>
          <br /></li>
        </div>
      )}
      {isCount2 && (
        <div><li>
          Product B - Quantity : {count2}
          <button onClick={()=>{setIsCount2(false)}}>Remove</button>
          <button onClick={()=>{setCount2(count2-1)}}>Decrease</button>
          <br /></li>
        </div>
      )}
      <br />
      <button
        onClick={() => {
          setIsCount1(true);
          setCount1(count1 + 1);
        }}
      >
        Add Product A
      </button>
      <button
        onClick={() => {
          setIsCount2(true);
          setCount2(count2 + 1);
        }}
      >
        Add Product B
      </button>
    </div>
  );
}
