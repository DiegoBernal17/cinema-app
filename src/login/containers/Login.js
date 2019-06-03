import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";
import UserConnected from "../components/UserConnected";

class Login extends Component {
  state = {
    loading: false,
    error: false
  };

  render() {
    if (this.state.loading) {
      return <h1>Cargando</h1>;
    }

    if (this.props.user)
      return (
        <div className="my-5">
          <UserConnected />
        </div>
      );

    return (
      <div className="card mx-auto my-5" style={{ width: "18rem" }}>
        <div className="card-body">
          {this.state.error && (
            <div className="badge badge-danger">{this.state.error}</div>
          )}
          <LoginForm onClick={this.login} />
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

export default connect(mapStateToProps)(Login);
