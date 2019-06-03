import React from "react";

const MovieTicket = props => (
  <div
    className="card bg-secondary text-white mx-auto mb-3"
    style={{ width: 420, height: 203 }}
  >
    <div className="row">
      <img
        src={props.poster}
        alt="poster"
        style={{ height: 200, width: 160 }}
      />
      <div className="ml-3 p-2">
        <h4>{props.name}</h4>
        <b>Cine:</b> {props.cinema}
        <br />
        <b>Día:</b> {props.date}
        <br />
        <b>Hora:</b> {props.hour}
      </div>
    </div>
  </div>
);

export default MovieTicket;
