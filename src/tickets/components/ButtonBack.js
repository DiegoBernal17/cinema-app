import React from "react";

const ButtonNext = props => (
  <div className="btn btn-link" style={{ width: 200 }} onClick={props.onClick}>
    <i className="fas fa-arrow-left"> </i> REGRESAR
  </div>
);

export default ButtonNext;
