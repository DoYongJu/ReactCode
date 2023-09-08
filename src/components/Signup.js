export default function Signup() {
  return (
    <>
      <select
        className="trainLine"
        onChange={(event) => {
          alert(event.target.value);
        }}>
        <option value={"1호선"}>1호선</option>
        <option value={"2호선"}> 2호선</option>
        <option value={"4호선"}> 4호선</option>
      </select>
    </>
  );
}
