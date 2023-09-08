import { useState } from "react";
import { useImmer } from "use-immer";
import styles from "../App.css";
export default function Form() {
  const [person, setPerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/ZF6s192m.jpg",
    },
  });

  function handleNameChange(event) {
    setPerson((draft) => {
      draft.name = event.target.value;
    });
  }
  function handleTitleChange(event) {
    setPerson((draft) => {
      draft.artwork.title = event.target.value;
    });
  }
  function handleCityChange(event) {
    setPerson((draft) => {
      draft.artwork.city = event.target.value;
    });
  }
  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        city:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <p>
        title:{person.artwork.title}
        {""} {"by"}
        {"  "}
        {person.name} {""}
        <br />
        (located in {person.artwork.city})
        <img src={person.artwork.image} alt={person.artwork.title} />
      </p>
    </>
  );
}
