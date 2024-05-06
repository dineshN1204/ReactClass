import { useState } from "react";

export default function useCounter(initialValue = 0, incVal) {
  const [count, setCount] = useState(initialValue);
  const handleInc = () => {
    setCount(count + incVal);
  };
  const handleDec = () => {
    setCount(count - incVal);
  };
  const handleReset = () => {
    setCount(initialValue);
  };
  return [count, handleInc, handleDec, handleReset];
}
