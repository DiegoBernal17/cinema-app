import React from "react";

const MenuProfile = props => (
  <div className="card">
    <div className="card-body">
      <div
        className="btn btn-primary d-block mb-1"
        onClick={() => props.onClick(2)}
      >
        <i className="fas fa-history"> </i> Historial de boletos
      </div>
      <div className="btn btn-primary d-block mb-1">
        <i className="fas fa-user-cog"> </i> Ajustes de cuenta
      </div>
      <div className="btn btn-primary d-block mb-1">
        <i className="fas fa-question" />
        <i className="far fa-credit-card"> </i> Métodos de pago
      </div>
      <div className="btn btn-secondary d-block mb-1">
        {" "}
        <i className="fas fa-question"> </i> Ayuda
      </div>
    </div>
  </div>
);

export default MenuProfile;
