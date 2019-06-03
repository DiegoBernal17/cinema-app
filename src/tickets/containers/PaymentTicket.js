import React from "react";

import ButtonNext from "../components/ButtonNext";
import ButtonBack from "../components/ButtonBack";

const PaymentTicket = props => (
  <React.Fragment>
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-title">
          <h3>Selecciona el método de pago</h3>
        </div>
        <hr />
        <h1 className="text-primary text-center">
          <span className="badge badge-info p-2 m-1">
            <i className="fab fa-cc-visa" />
          </span>
          <span className="badge badge-info p-2 m-1">
            <i className="fab fa-cc-mastercard" />
          </span>
          <span className="badge badge-info p-2 m-1">
            <i className="fab fa-cc-amex" />
          </span>
          <span className="badge badge-info p-2 m-1">
            <i className="fab fa-paypal" />
          </span>
        </h1>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <form>
              <div className="row mb-1">
                <div className="col-5">
                  <label htmlFor="num">Número de tarjeta:</label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" id="num" />
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-5">
                  <label htmlFor="num">Caducidad:</label>
                </div>
                <div className="col-7">
                  <input
                    type="text"
                    className="form-control d-inline-block ml-1"
                    style={{ width: 100 }}
                  />
                  <input
                    type="text"
                    className="form-control d-inline-block"
                    style={{ width: 100 }}
                  />
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-5">
                  <label htmlFor="num">CCV:</label>
                </div>
                <div className="col-7">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: 100 }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-5">
                  <label htmlFor="num">Titular de la cuenta:</label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
              </div>

              <hr />

              <div className="row mb-1">
                <div className="col-5">
                  <label htmlFor="num">Correo electrónico:</label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </div>
    <ButtonBack onClick={props.beforeStep} />
    <ButtonNext onClick={props.nextStep} />
  </React.Fragment>
);

export default PaymentTicket;
