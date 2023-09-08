import { useState } from "react";
import { useImmer } from "use-immer";
let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: "false" },
  { id: 1, title: "PIXXX Bellies", seen: "false" },
  { id: 2, title: "small Bellies", seen: "true" },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useImmer(initialList);

  function handleMyToggle(artworkId, nextSeen) {
    const nextMyList = myList.map((a) => {
      if (a.id === artworkId) {
        const ma = { ...a, seen: nextSeen };
        return ma;
      } else {
        return a;
      }
    });
    setMyList(nextMyList);
  }
  function handleYourToggle(artworkId, nextSeen) {
    // const nextYourList = yourList.map((a) => {
    //   if (a.id === artworkId) {
    //     const ma = { ...a, seen: nextSeen };
    //     return ma;
    //   } else {
    //     return a;
    //   }
    // });

    setYourList((nextYourList) => {
      //immer를 사용한 함수
      const artwork = nextYourList.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  }
  return (
    <>
      <h1> Art Bucket List</h1>
      <h2> My List of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleMyToggle} />
      <h2> Your List of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleYourToggle} />
    </>
  );
}
function ItemList({ artworks, onToggle }) {
  return (
    <>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={(event) => {
                  onToggle(artwork.id, event.target.checked);
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
