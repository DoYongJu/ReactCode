import React from "react";
import Dabbyeon from "./Dabbyeon";

export default function Jilmun({ id, naexyong, dabbyeondeul }) {
  return (
    <>
      <div key={id} className="card">
        <div className="card-header">
          <p> {naexyong}</p>
        </div>
        <div className="card-content p-2">
          {dabbyeondeul.map((dabb, i) => (
            <Dabbyeon
              key={i}
              sunseo={dabb.sunseo}
              naexyong={dabb.naexyong}
              voteCount={dabb.voteCount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
