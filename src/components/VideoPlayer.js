import { useRef, useEffect } from "react";
export default function VideoPlayer({ src, isPlaying, text, onText }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    console.log("ssss");
  }, []); //[]==한번만 실행해

  return (
    <>
      <div>
        <hr />
        <input
          value={text}
          onChange={(e) => {
            onText(e.target.value);
          }}
        />
        <video width="300" src={src} ref={ref} loop playInline></video>
      </div>
    </>
  );
}
