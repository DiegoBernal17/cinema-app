import React from "react";

const FormCountTicket = props => (
  <div className="card">
    <div className="card-header">{props.title}</div>
    <div className="card-body text-center py-2 px-1">
      <h5>$ {props.price}</h5>
      <button
        className="bg-gray border btn-sm"
        onClick={() => props.onClick(false)}
      >
        <i className="fas fa-minus" />
      </button>
      <input
        type="text"
        name="a"
        className="form-control d-inline-block mx-2 text-center"
        value={props.value}
        max="99"
        min="0"
        readOnly
        style={{ width: 80 }}
      />
      <button
        className="bg-gray border btn-sm"
        onClick={() => props.onClick(true)}
      >
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

export default FormCountTicket;
