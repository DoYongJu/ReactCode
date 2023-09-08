import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleFirstCat() {
    firstCatRef.current.scrollIntoview({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleSecondCat() {
    secondCatRef.current.scrollIntoview({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleThirdCat() {
    thirdCatRef.current.scrollIntoview({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <>
      <hr />
      <nav>
        <button onClick={handleFirstCat}>Tom</button>
        <button onClick={handleSecondCat}>Maru</button>
        <button onClick={handleThirdCat}>Jelly</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/280/200"
              alt="Jelly"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
