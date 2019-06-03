import React, { Component } from "react";
import { Link } from "react-router-dom";
import { post } from "../../configs/functions";
import { connect } from "react-redux";
const md5 = require("md5");

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    error: false
  };

  login = e => {
    if (!this.state.email || !this.state.password) {
      return this.setState({ error: "Uno o ambos campos vacíos" });
    }

    this.setState({ loading: true });
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: md5(this.state.password)
    };
    console.log(data);

    post("/login", data)
      .then(response => {
        if (!response.error) {
          if (response.data.error) {
            this.setState({ error: response.data.message, loading: false });
          }
          this.props.dispatch({
            type: "LOGIN",
            payload: {
              query: response.data.data
            }
          });
        } else {
          this.setState({ error: response.data.message, loading: false });
        }
      })
      .catch(error => {
        this.setState({ error: "Login incorrecto", loading: false });
      });
  };

  handleEmail = ev => {
    this.setState({ email: ev.target.value, error: false });
  };

  handlePassword = ev => {
    this.setState({ password: ev.target.value, error: false });
  };

  render() {
    return (
      <React.Fragment>
        <h5 className="card-title">Inicia sesión</h5>
        {this.state.error && (
          <div className="badge badge-danger">{this.state.error}</div>
        )}
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              value={this.state.email}
              onChange={this.handleEmail}
              type="text"
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              value={this.state.passowr}
              onChange={this.handlePassword}
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <Link to="/register" className="btn btn-link">
            Regitrarse
          </Link>
          <button className="btn btn-primary float-right" onClick={this.login}>
            Iniciar sesión
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect()(LoginForm);
