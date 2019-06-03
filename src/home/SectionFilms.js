import React, { Component } from "react";
import Card from "../components/Card";
import FilmsBar from "../components/FilmsBar";
import Axios from "axios";

class SectionFilms extends Component {
  state = {
    movies: [],
    loading: false,
    error: false
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/movies").then(response => {
      this.setState({ movies: response.data.data });
    });
  }

  render() {
    return (
      <div
        className="container-flux px-5 py-3"
        style={{ backgroundColor: "#ddd" }}
      >
        <h1>Películas en cartelera</h1>
        <div className="row">
          <FilmsBar>
            {this.state.movies.map(movie => (
              <Card
                image={movie.poster}
                title={movie.name}
                key={movie.id}
                id={movie.id}
              />
            ))}

            {this.state.movies.length === 0 && (
              <h3>Error al mostrar las peliculas.</h3>
            )}
          </FilmsBar>
        </div>
      </div>
    );
  }
}

export default SectionFilms;
