import { useState, useRef } from "react";
export default function Subway({ data }) {
  function handleChangeSelect() {}
  return (
    <>
      <div>
        <hr />
        <label> 출발역</label>{" "}
        <select className="start" onChange={handleChangeSelect}>
          <option value="1">0.1톤</option>
        </select>
        <label> 도착역</label> <select className="end"></select>
        <label>
          <input type="radio"></input>
          <input type="radio"></input>청소년
          <input type="radio"></input>어린이
        </label>
      </div>
    </>
  );
}
