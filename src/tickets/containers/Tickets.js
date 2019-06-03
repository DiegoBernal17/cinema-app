import React, { Component } from "react";
import MovieTicket from "./MovieTicket";
import SelectTicket from "./SelectTicket";
import LoginTicket from "./LoginTicket";
import PaymentTicket from "./PaymentTicket";
import Rooms from "./Rooms";
import { get, post } from "../../configs/functions";
import { connect } from "react-redux";
import SeeTicket from "./SeeTicket";

class Tickets extends Component {
  state = {
    step: 1,
    normal: 0,
    senior: 0,
    children: 0,
    especial3D: 0,
    totalTickets: 0,
    totalTicketsSelected: 0,
    seatsSelected: [],
    function: {},
    movie: {},
    date: "",
    cinema: {},
    room: {}
  };

  componentDidMount() {
    const now = new Date();
    const date =
      now.getDate() + " - " + (now.getMonth() + 1) + " - " + now.getFullYear();
    this.setState(
      {
        function: this.props.location.state.function,
        movie: this.props.location.state.movie,
        date
      },
      () => {
        get("/room/" + this.state.function.roomId).then(req => {
          this.setState({ room: req.data.data });
        });
      }
    );

    get("/cinema/" + this.props.cinema).then(req => {
      this.setState({ cinema: req.data.data });
    });
  }

  getTicketTypes = () => {
    const tickets = [];
    for (let i = 0; i < this.state.normal; i++) {
      tickets.push(1);
    }
    for (let i = 0; i < this.state.senior; i++) {
      tickets.push(2);
    }
    for (let i = 0; i < this.state.children; i++) {
      tickets.push(3);
    }
    for (let i = 0; i < this.state.especial3D; i++) {
      tickets.push(4);
    }
    return tickets;
  };

  finish = () => {
    const types = this.getTicketTypes();
    const userId = this.props.user ? this.props.user.id : null;
    this.state.seatsSelected.forEach((seat, i) => {
      const data = {
        ticket: {
          seat,
          type: types[i],
          functionId: this.state.function.id,
          userId
        }
      };
      post("/ticket", data);
    });
  };

  nextStep = () => {
    let step = this.state.step + 1;
    if (
      this.state.normal === 0 &&
      this.state.senior === 0 &&
      this.state.children === 0
    ) {
      return;
    }

    if (
      this.state.step === 2 &&
      this.state.totalTickets !== this.state.totalTicketsSelected
    ) {
      return;
    }

    if (step === 5) {
      this.finish();
    }

    this.setState({ step });
  };

  beforeStep = () => {
    let step = this.state.step - 1;
    if (this.state.step === 1) {
      step = 1;
    }
    this.setState({ step, totalTicketsSelected: 0 });
  };

  changeCountTicketsBase = (ind, value, type) => {
    let currentValue = value + 1;
    let totalTickets = this.state.totalTickets + 1;
    if (!type) {
      if (value < 1) {
        return;
      }
      currentValue = value - 1;
      totalTickets = this.state.totalTickets - 1;
    }
    this.setState({ [ind]: currentValue, totalTickets });
  };

  changeNormal = type => {
    this.changeCountTicketsBase("normal", this.state.normal, type);
  };

  changeSenior = type => {
    this.changeCountTicketsBase("senior", this.state.senior, type);
  };

  changeChildren = type => {
    this.changeCountTicketsBase("children", this.state.children, type);
  };

  onClickSeat = item => {
    const ticketSelected = this.state.totalTicketsSelected;

    const elementClass = item.currentTarget.classList;
    const seat = item.currentTarget.innerHTML;
    if (elementClass.contains("btn-dark")) {
      if (ticketSelected >= this.state.totalTickets) {
        return;
      }
      elementClass.add("btn-primary");
      elementClass.remove("btn-dark");
      this.state.seatsSelected.push(seat);
      this.setState({ totalTicketsSelected: ticketSelected + 1 });
    } else {
      if (ticketSelected === 0) {
        return;
      }
      elementClass.remove("btn-primary");
      elementClass.add("btn-dark");
      const filtered = this.state.seatsSelected.filter(val => val !== seat);
      this.setState({
        totalTicketsSelected: ticketSelected - 1,
        seatsSelected: filtered
      });
    }
  };

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <MovieTicket
            poster={this.state.movie.poster}
            name={this.state.movie.name}
            date={this.state.date}
            hour={this.state.function.hour}
            cinema={this.state.cinema.name}
          />
          <div className="col-lg">
            {this.state.step === 1 && (
              <SelectTicket
                nextStep={this.nextStep}
                beforeStep={this.beforeStep}
                normal={this.state.normal}
                senior={this.state.senior}
                children={this.state.children}
                especial3D={this.state.especial3D}
                changeNormal={this.changeNormal}
                changeSenior={this.changeSenior}
                changeChildren={this.changeChildren}
                cinema={this.state.cinema}
              />
            )}
            {this.state.step === 2 && (
              <Rooms
                nextStep={this.nextStep}
                beforeStep={this.beforeStep}
                onClick={this.onClickSeat}
              />
            )}
            {this.state.step === 3 && (
              <LoginTicket
                nextStep={this.nextStep}
                beforeStep={this.beforeStep}
              />
            )}
            {this.state.step === 4 && (
              <PaymentTicket
                nextStep={this.nextStep}
                beforeStep={this.beforeStep}
              />
            )}
            {this.state.step === 5 && (
              <SeeTicket
                seats={this.state.seatsSelected}
                hour={this.state.function.hour}
                date={this.state.date}
                roomNumber={this.state.room.number}
                movieTitle={this.state.movie.name}
                cinemaName={this.state.cinema.name}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cinema: state.cinema,
    user: state.user
  };
};

export default connect(mapStateToProps)(Tickets);
