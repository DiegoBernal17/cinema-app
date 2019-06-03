import React from "react";

const SeeTicket = props => (
  <React.Fragment>
    <div className="alert alert-success text-center">
      <h3>¡Compra realizada con exito!</h3>
    </div>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-12 col-md-8">
        <h5>Recibirás un correo con la información de compra</h5>
        <div className="card">
          <div className="card-header">
            <h4>Información</h4>
          </div>
          <div className="card-body">
            <img
              src={require("../qr_img.png")}
              alt="qr"
              className="float-left mr-3"
            />
            <hr />
            <b>Cine:</b> {props.cinemaName}
            <br />
            <b>Película:</b> {props.movieTitle}
            <br />
            <b>Día y hora</b> {props.date} a las {props.hour}
            <br />
            <b>Sala: </b> {props.roomNumber}
            <br />
            <b>Asientos:</b>{" "}
            {props.seats.map((seat, i) => (
              <span className="badge badge-primary m-1" key={i}>
                {seat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-2" />
    </div>
  </React.Fragment>
);

export default SeeTicket;
