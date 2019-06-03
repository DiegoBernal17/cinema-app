import React from "react";

const Seat = props => (
  <div className="col btn btn-dark ml-1 mb-1" onClick={props.onClick}>
    {props.children}
  </div>
);

export default Seat;
