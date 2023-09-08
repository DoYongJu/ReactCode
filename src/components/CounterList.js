import { useState } from "react";
let initialCounters = [0, 0, 0];
export default function CounterList() {
  const [counters, setCounter] = useState(initialCounters);
  function handleIncrementClick(i) {
    const nextCounter = [...counters];
    nextCounter[i] = counters[i] + 1;
    setCounter(nextCounter);
  }
  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}

          <button onClick={() => handleIncrementClick(i)}>+1</button>
        </li>
      ))}
    </ul>
  );
}
