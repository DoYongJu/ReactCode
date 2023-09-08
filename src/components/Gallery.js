import { useState } from "react";
import sculptureList from "../data/New.json";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPre = index > 0;
  function HandleShowMore() {
    setShowMore(!showMore);
  }
  function HandleNext() {
    const nextIndex = index + 1;
    setIndex(hasNext ? nextIndex : 0);
  }
  function HandlePre() {
    const nextIndex = index - 1;
    setIndex(hasPre ? nextIndex : sculptureList.length - 1);
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={HandlePre}> Pre </button>
      <button onClick={HandleNext}> Next </button>
      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={HandleShowMore}>
        {showMore ? "Hide details" : "show details"}{" "}
      </button>
      {showMore ? <p>{sculpture.description}</p> : " "}

      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

export default Gallery;
