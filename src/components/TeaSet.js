function Cup({ guest }) {
  return <h1>Tea cup for guest #{guest}</h1>;
}
export default function TeaSet() {
  let cups = [];
  for (let i = 0; i < 3; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
