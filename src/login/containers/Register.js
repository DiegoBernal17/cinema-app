import React, { Component } from "react";
import { post } from "../../configs/functions";
import { connect } from "react-redux";
const md5 = require("md5");

class Register extends Component {
  state = {
    name: "",
    paternal: "",
    maternal: "",
    email: "",
    password: "",
    rpassword: "",
    terms: false,
    errors: ""
  };

  handleChange = (type, ev) => {
    const val = ev.target.value;
    this.setState({ [type]: val, errors: "" });
  };

  handleChecked = ev => {
    const val = ev.target.checked;
    this.setState({ terms: val, errors: "" });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (
      !this.state.name ||
      !this.state.paternal ||
      !this.state.maternal ||
      !this.state.email ||
      !this.state.password ||
      !this.state.rpassword
    ) {
      return this.setState({ errors: "No dejes campos vacíos" });
    }
    if (!this.state.terms) {
      return this.setState({
        errors: "Debes aceptar los términos y condiciones"
      });
    }
    if (this.state.password !== this.state.rpassword) {
      return this.setState({ errors: "Las contraseñas no coinciden" });
    }
    const data = {
      user: {
        name: this.state.name,
        paternal: this.state.paternal,
        maternal: this.state.maternal,
        email: this.state.email,
        password: md5(this.state.password)
      }
    };
    console.log(data);
    post("/user", data).then(response => {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          query: response.data
        }
      });
    });
  };

  render() {
    return (
      <div className="card mx-auto my-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Regístrate</h5>
          <form action="#" method="POST">
            {this.state.errors && (
              <div className="badge badge-danger d-block">
                {this.state.errors}
              </div>
            )}
            <div className="form-group mb-1">
              <label htmlFor="first_name">Nombre(s):</label>
              <input
                value={this.state.name}
                onChange={e => {
                  this.handleChange("name", e);
                }}
                type="text"
                className="form-control"
                id="first_name"
                required
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="last_name">Apellido paterno:</label>
              <input
                value={this.state.paternal}
                onChange={e => {
                  this.handleChange("paternal", e);
                }}
                type="text"
                className="form-control"
                id="last_name"
                required
              />
            </div>{" "}
            <div className="form-group mb-1">
              <label htmlFor="last_name">Apellido Materno:</label>
              <input
                value={this.state.maternal}
                onChange={e => {
                  this.handleChange("maternal", e);
                }}
                type="text"
                className="form-control"
                id="last_name2"
                required
              />
            </div>
            <div className="form-group  mb-1">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                value={this.state.email}
                onChange={e => {
                  this.handleChange("email", e);
                }}
                type="text"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group  mb-1">
              <label htmlFor="password">Contraseña:</label>
              <input
                value={this.state.password}
                onChange={e => {
                  this.handleChange("password", e);
                }}
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <div className="form-group  mb-1">
              <label htmlFor="repeat_password">Repite la contraseña:</label>
              <input
                value={this.state.rpassword}
                onChange={e => {
                  this.handleChange("rpassword", e);
                }}
                type="password"
                className="form-control"
                id="repeat_password"
                required
              />
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value={this.state.terms}
                onChange={this.handleChecked}
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                Acepto los <u>Términos y Condiciones</u>
              </label>
            </div>
            <button
              onClick={this.handleSubmit}
              className="btn btn-success btn-block float-right"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
