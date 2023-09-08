function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent += "💖";
  } else {
    itemContent += "🤞";
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <>
      <section>
        <h1> Sally Ride's Packing List</h1>
        <ul>
          <Item name="Space suit" isPacked={true} />
          <Item name="Space suit" isPacked={true} />
          <Item name="Space suit" isPacked={false} />
        </ul>
      </section>
      <hr></hr>
    </>
  );
}
