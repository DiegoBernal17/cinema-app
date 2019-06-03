import React from "react";
import { Link } from "react-router-dom";

const Card = props => (
  <Link to={`/movie/${props.id}`}>
    <div className="card" style={{ margin: 4, width: 240 }}>
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={{ height: 300 }}
      />
      <div className="card-body px-2 text-center">
        <b className="card-title">{props.title}</b>
        <p className="card-text">{props.children}</p>
      </div>
    </div>
  </Link>
);

export default Card;
