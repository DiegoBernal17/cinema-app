import React from "react";
import SelectCinemaBar from "./SelectCinemaBar";
import { Link } from "react-router-dom";
import RightHeader from "./RightHeader";

const Header = () => (
  <header>
    <SelectCinemaBar />
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "rgb(25, 25, 25)" }}
    >
      <Link to="/" className="navbar-brand" href="#">
        Cinema
      </Link>
      <button
        className="navbar-toggler navbar-dark bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">
              <i className="fas fa-home" /> Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/premieres" className="nav-link" href="#">
              <i className="far fa-play-circle" /> Próximos estrenos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/presales" className="nav-link" href="#">
              <i className="fas fa-film"> </i> Preventas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link" href="#">
              <i className="fas fa-store" /> Dulceria
            </Link>
          </li>
        </ul>

        <RightHeader />
      </div>
    </nav>
  </header>
);

export default Header;
