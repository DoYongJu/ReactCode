import people from "../data/Data.json";
import getImageUrl from "./Utils.js";

export default function List() {
  const chemists = [];
  for (let person of people) {
    if (person.profession == "chemist") {
      chemists.push(person);
    }
  }

  const listItem = chemists.map((ch) => {
    return (
      <li key={ch.id}>
        <img src={getImageUrl(ch)} alt={ch.name} />
        <p>
          <b>{ch.name}</b>
          known for{ch.accomplishment}
        </p>
      </li>
    );
  });

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItem}</ul>
    </article>
  );
}
