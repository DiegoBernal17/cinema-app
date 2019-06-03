import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const RightHeader = props => {
  if (props.user) {
    return (
      <Link to="/profile">
        <i className="fas fa-user-circle" />
        {" " + props.user.name + " " + props.user.paternal}
      </Link>
    );
  }
  return (
    <React.Fragment>
      <Link to="/login" className="btn btn-primary mr-1">
        <i className="fas fa-sign-in-alt"> </i> Ingresar
      </Link>
      <Link to="/register" href="#" className="btn btn-success">
        <i className="fas fa-user-edit" /> Registrarse
      </Link>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(RightHeader);
