import React, { useEffect, useState } from "react";
import "./Task8.css";

export default function Task8() {
  const [dur, setDur] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const handleChange = (e) => {
    setDur(e.target.value);
    setSec(e.target.value);
  };
  useEffect(() => {
    let interval;
    if (isRunning && sec > 0) {
      interval = setInterval(() => {
        setSec((prev) => prev - 1);
      }, 1000);
    } else if (sec === 0 && isRunning) {
      setIsTimerCompleted(true);
      setIsRunning(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, sec]);
  const progressWidth = (sec / dur) * 100;
  return (
    <div>
      {isTimerCompleted ? (
        <h1>Happy Birthday</h1>
      ) : (
        //  <p>count timer: {sec}</p>
        <div className="container">
          <div
            className="progressbar"
            style={{ width: progressWidth + "%" }}
          ></div>
        </div>
      )}
      <br />
      <input
        type="number"
        value={dur}
        onChange={handleChange}
        disabled={isRunning}
      />
      {isRunning ? (
        <button
          onClick={() => {
            setIsRunning(false);
          }}
        >
          Stop
        </button>
      ) : (
        <button
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Start
        </button>
      )}
      <button
        onClick={() => {
          setSec(dur);
          setIsRunning(false)
          setIsTimerCompleted(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}
