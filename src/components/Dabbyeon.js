import React, { useContext } from "react";
import VoterContext from "./VoterContext";

export default function Dabbyeon({ sunseo, naexyong, voteCount }) {
  const voterCount = useContext(VoterContext);
  return (
    <div className="card-content p-2">
      <p>
        {" "}
        {sunseo}.{naexyong} [{voteCount}/{voterCount}]{" "}
      </p>
    </div>
  );
}
