import React, { Component } from "react";
import FilmsMonth from "../components/FilmsMonth";

class Premieres extends Component {
  state = {
    current: { month: "Mayo", movies: [] },
    nextMonths: [
      { month: "Junio", movies: [] },
      { month: "Julio", movies: [] },
      { month: "Agosto", movies: [] }
    ]
  };

  render() {
    return (
      <div className="container my-5">
        <FilmsMonth
          title={this.state.current.month}
          movies={this.state.current.movies}
        />
        {this.state.nextMonths.map((month, i) => (
          <FilmsMonth title={month.month} movies={month.movies} key={i} />
        ))}
      </div>
    );
  }
}

export default Premieres;
