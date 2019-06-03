import React from "react";
import Seat from "./Seat";

const SeatsCol = props => (
  <React.Fragment>
    <div
      className="bg-secondary"
      style={{ width: 30, borderBottom: "1px solid #999" }}
    />
    {props.seats.map((seat, i) => (
      <Seat key={i} onClick={props.onClick}>
        {seat}
      </Seat>
    ))}
    <div
      className="bg-secondary ml-1"
      style={{ width: 30, borderBottom: "1px solid #999" }}
    />
    <div className="w-100" />
  </React.Fragment>
);

export default SeatsCol;
