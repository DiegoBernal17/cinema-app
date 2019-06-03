import React, { Component } from "react";
import SectionFilms from "../home/SectionFilms";
import { connect } from "react-redux";
import { get } from "../configs/functions";
const js2xmlparser = require("js2xmlparser");

class Movie extends Component {
  state = {
    movie: {},
    movieXML: "",
    loading: true,
    error: false
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId && movieId !== undefined) {
      get(`/movie/${this.props.match.params.id}`).then(response => {
        this.setState({ movie: response.data.data, loading: false }, () => {
          this.setState({
            movieXML: js2xmlparser.parse("Pelicula", this.state.movie)
          });
        });
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Cargando...</h1>;
    }

    if (this.props.match.params.id) {
      return <div className="container pb-5 pt-3">{this.state.movieXML}</div>;
    }
    return <SectionFilms />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    cinema: state.cinema
  };
};

export default connect(mapStateToProps)(Movie);
