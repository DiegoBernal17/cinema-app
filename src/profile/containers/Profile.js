import React, { Component } from "react";
import UserConnected from "../../login/components/UserConnected";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MenuProfile from "../components/MenuProfile";
import HistoryTickets from "../components/HistoryTickets";

class Profile extends Component {
  state = {
    option: 1
  };

  handleMenu = option => {
    this.setState({ option });
  };

  render() {
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="my-5 row">
        <div className="col-2 col-md-4" />
        <div className="col-8 col-md-4">
          <UserConnected width={{ width: "inherit" }} />
          {this.state.option === 1 && <MenuProfile onClick={this.handleMenu} />}
          {this.state.option === 2 && <HistoryTickets />}
        </div>
        <div className="col-2 col-md-4" />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
