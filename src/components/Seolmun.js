import React from "react";
import Jilmun from "./Jilmun.js";

import { createContext, useContext } from "react";
import VoterContext from "./VoterContext";

export default function Seolmun({ data }) {
  return (
    <VoterContext.Provider value={data.voterCount}>
      <div className="card">
        <div className="card-header">
          <p key={data.id}>{data.juje}</p>
          <hr></hr>
          <div className="card-content p-2">
            <div className="row">
              <div className="cell-2">기간</div>{" "}
              <div className="cell-10">
                {new Date(data.fromGigan).toLocaleDateString()}~
                {new Date(data.toGigan).toLocaleDateString()}
              </div>
              <div className="cell-2">개설자</div>{" "}
              <div className="cell-10">{data.openerUsername}</div>
              <div className="cell-2">참가자수</div>{" "}
              <div className="cell-10">{data.openerNo}</div>
            </div>
          </div>
        </div>
        {data.jilmundeul.map((jilmun, i) => (
          <Jilmun
            key={i}
            naexyong={jilmun.naexyong}
            dabbyeondeul={jilmun.dabbyeondeul}
          />
        ))}
      </div>
    </VoterContext.Provider>
  );
}
