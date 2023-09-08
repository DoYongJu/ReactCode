import { useState, useRef } from "react";

export default function Counterr() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <>
      <div>
        <hr />
        <button
          onClick={() => {
            setShow(!show);
          }}>
          Toggle with setState
        </button>
        <button onClick={() => ref.current.remove()}>
          Remove from the DOM
        </button>
        {show && <p ref={ref}>Hello World</p>}
      </div>
    </>
  );
}
