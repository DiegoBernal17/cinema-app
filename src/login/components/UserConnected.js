import React, { Component } from "react";
import { connect } from "react-redux";

class UserConnected extends Component {
  logout = () => {
    this.props.dispatch({
      type: "LOGOUT"
    });
  };

  render() {
    return (
      <div
        className="card mx-auto text-center mb-1"
        style={this.props.width || { width: "18rem" }}
      >
        <div className="card-body">
          <h5>
            Bienvenido {this.props.user.name + " " + this.props.user.paternal}{" "}
          </h5>
          <button className="btn btn-danger btn-sm" onClick={this.logout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserConnected);
