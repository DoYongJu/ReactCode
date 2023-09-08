import { useState } from "react";
import { useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  //let intervalId = null;
  const intervalId = useRef(null);
  function handleStartClick() {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10000);
  }
  function handleStopClick() {
    clearInterval(intervalId.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
    secondsPassed = secondsPassed.toFixed(0);
  }

  return (
    <>
      <div>
        <h1>Time passed: {secondsPassed}</h1>
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleStopClick}>Stop</button>
      </div>
    </>
  );
}
