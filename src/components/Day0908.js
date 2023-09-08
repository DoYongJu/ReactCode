import { useState, useRef } from "react";

import Stopwatch from "./Stopwatch.js";
import CatFriends from "./CatFriends.js";
import VideoPlayer from "./VideoPlayer.js";
import Counterr from "./Counterr.js";
import Subway from "./Subway.js";
import Subwaydb from "../Data/Subwaydb.json";

export default function Counter() {
  const [state, setState] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  let ref = useRef(0);
  const [text, setText] = useState("");
  function handleText(text) {
    setText(text);
  }
  function handleClick() {
    ref.current = ref.current + 1;
  }
  return (
    <>
      <button onClick={handleClick}>
        Click me!! state:{state} ref:{ref.current}
      </button>
      <Stopwatch />
      <CatFriends />
      <div>
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          src={
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          }
          isPlaying={isPlaying}
          text={text}
          onText={handleText}
        />
      </div>
      <Counterr />
      <Subway data={Subwaydb} />
    </>
  );
}
