import { useState } from "react";

let nextId = 3;
let initialArtists = [
  //있던 데이터에서 빼보기
  { id: 1, name: "Marta Colvin Andrade" },
  { id: 2, name: "Eduardo Catalano" },
  { id: 3, name: "Alice Pranchio" },
];
export default function LList() {
  const [name, setName] = useState("");
  const [artists, setArtist] = useState(
    initialArtists
    //     useState([
    // { id: 1, name: "Marta Colvin Andrade" },
    // { id: 2, name: "Eduardo Catalano" }],
  );

  function handleAddArtist() {
    // artists.push(name);

    // const nextPerson = artists.concat([name]);
    // setArtist(nextPerson);
    setArtist([...artists, { id: ++nextId, name }]);
  }
  function handleDeleteArtist(artistId) {
    const nextArtist = artists.filter((artist) => artist.id !== artistId);
    setArtist(nextArtist);
  }
  function handleReverse() {
    console.log(artists);

    const reversed = artists.reverse();
    const newaa = artists.concat(reversed);
    setArtist([...artists, reversed]);
  }
  console.log(artists);
  return (
    <>
      <h1>Inspring sculpture</h1>
      <button onClick={handleReverse}>Reverse</button> <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleAddArtist}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li>
            {artist.name}
            <button onClick={() => handleDeleteArtist(artist.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
