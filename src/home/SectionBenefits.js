import React from "react";

const SectionBenefits = () => (
  <div className="container-flux p-5 text-center">
    <h1 className="mb-5">Conoce los beneficios de registrarte</h1>
    <div className="row mb-4">
      <div className="col-6 col-md-4">
        <i className="fas fa-history fa-3x" />
        <h5 className="mt-3">Controla tu historial de películas</h5>
      </div>
      <div className="col-6 col-md-4">
        <i className="far fa-credit-card fa-3x" />
        <h5 className="mt-3">Compra rápidamente y fácil</h5>
      </div>
      <div className="col-6 col-md-4">
        <i className="fas fa-shopping-cart fa-3x" />
        <h5 className="mt-3">Compra en dulcería</h5>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-6 col-md-4">
        <i className="fas fa-bell fa-3x" />
        <h5 className="mt-3">Recibe alertas de próximos estrenos</h5>
      </div>
      <div className="col-6 col-md-4">
        <i className="fas fa-walking fa-3x" />
        <h5 className="mt-3">Prioridad al comprar boletos</h5>
      </div>
      <div className="col-6 col-md-4">
        <i className="fas fa-medal fa-3x" />
        <h5 className="mt-3">Gana puntos y obten descuentos</h5>
      </div>
    </div>
  </div>
);

export default SectionBenefits;
