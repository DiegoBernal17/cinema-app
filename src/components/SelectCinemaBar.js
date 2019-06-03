import React, { Component } from "react";
import { get } from "../configs/functions";
import { connect } from "react-redux";

class SelectCinemaBar extends Component {
  state = {
    selectedCity: "",
    selectedCinema: "",
    cities: [],
    allCinemas: [],
    cinemas: []
  };

  componentDidMount() {
    get("/cinemas").then(request => {
      const allCinemas = request.data.data;
      const allCities = [];
      allCinemas.forEach(cinema => {
        allCities.push(cinema.city);
      });
      const cities = [...new Set(allCities)];
      this.setState({ cities, allCinemas }, () => {
        if (this.props.city) {
          this.setState({ selectedCity: this.props.city }, () => {
            this.searchCinemas();
          });
        }
      });
    });
  }

  onSelectCity = e => {
    const val = e.target.value;
    this.setState({ selectedCity: val }, () => {
      this.searchCinemas();
      this.props.dispatch({
        type: "SELECT_CITY",
        payload: {
          query: val
        }
      });
    });
  };

  onSelectCinema = e => {
    const val = e.target.value;
    this.setState({ selectedCinema: val }, () => {
      this.props.dispatch({
        type: "SELECT_CINEMA",
        payload: {
          query: val
        }
      });
    });
  };

  searchCinemas = () => {
    if (this.state.selectedCity !== "" && this.state.selectedCinema === "") {
      const cinemas = this.state.allCinemas.filter(cinema => {
        return cinema.city === this.state.selectedCity;
      });
      this.setState({ cinemas }, () => {
        if (this.props.cinema) {
          this.setState({ selectedCinema: this.props.cinema });
        }
      });
    }
  };

  render() {
    return (
      <div
        style={{ width: "100vw", backgroundColor: "rgb(13, 63, 117)" }}
        className="mr-2 p-2"
      >
        <div className="mx-auto input-group" style={{ width: 500 }}>
          <div className="input-group-prepend mr-1">
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.selectedCity}
              onChange={this.onSelectCity}
            >
              <option value="">Ciudad</option>
              {this.state.cities.map((city, i) => (
                <option key={i} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            value={this.state.selectedCinema}
            onChange={this.onSelectCinema}
          >
            <option value="">Selecciona tu cine</option>
            {this.state.cinemas.map(cinema => (
              <option value={cinema.id} key={cinema.id}>
                {cinema.name}
              </option>
            ))}
          </select>
          <button className="ml-1 btn btn-warning">Ver funciones</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    city: state.city,
    cinema: state.cinema
  };
};

export default connect(mapStateToProps)(SelectCinemaBar);
