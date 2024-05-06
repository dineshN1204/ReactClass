import React, { useReducer } from "react";

export default function Task9UseReducerr() {
  const initialState = 0;
  const reducer = (state, action) => {
switch(action){
    
}
  };
  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {count1}
      <button>Add Product A</button>
      {count2}
      <button>Add Product B</button>
    </div>
  );
}
