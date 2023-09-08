import { useState } from "react";
import { useImmer } from "use-immer";
function Panel({ title, children, isActive, onShow }) {
  return (
    <>
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    </>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2> Almaty, kazashstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0 ? true : false}
        onShow={() => {
          setActiveIndex(1);
        }}>
        onShow With a poplulation of about...
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1 ? true : false}
        onShow={() => {
          setActiveIndex(1);
        }}>
        The name comes from...
      </Panel>
    </>
  );
}
