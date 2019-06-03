import React from "react";

const ButtonNext = props => (
  <div
    className="btn btn-primary float-right"
    style={{ width: 200 }}
    onClick={props.onClick}
  >
    CONTINUAR <i className="fas fa-arrow-right"> </i>
  </div>
);

export default ButtonNext;
