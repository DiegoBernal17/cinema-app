import React, { Component } from "react";
import SectionFilms from "../home/SectionFilms";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { get } from "../configs/functions";

class Movie extends Component {
  state = {
    functions: [],
    movie: {},
    date: "",
    loading: true,
    error: false
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId && movieId !== undefined) {
      get(`/movie/${this.props.match.params.id}`).then(response => {
        this.setState({ movie: response.data.data, loading: false });
      });
      if (this.props.cinema) {
        get(
          `/movie/${this.props.match.params.id}/cinema/${this.props.cinema}`
        ).then(req => {
          const functions = [];
          req.data.data.forEach(rooms => {
            rooms.functions.forEach(funct => {
              functions.push(funct);
            });
          });
          this.setState({ functions });
        });
      }
    }

    const now = new Date();
    const date =
      now.getDate() + " - " + (now.getMonth() + 1) + " - " + now.getFullYear();
    this.setState({ date });
  }

  render() {
    if (this.state.loading) {
      return <h1>Cargando...</h1>;
    }

    const { movie } = this.state;
    if (this.props.match.params.id) {
      return (
        <div className="container pb-5 pt-3">
          <div className="card mb-3 text-white bg-secondary">
            <div className="card-body">
              {this.props.cinema ? (
                this.state.functions.length > 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <h5>
                        ESPAÑOL{" "}
                        <div className="badge badge-warning">
                          {this.state.date}
                        </div>{" "}
                      </h5>
                      {this.state.functions.map(funct => (
                        <Link
                          key={funct.id}
                          to={{
                            pathname: `/tickets/${funct.id}`,
                            state: { function: funct, movie: this.state.movie }
                          }}
                          className="btn btn-light py-1 mr-1 mb-1"
                        >
                          {funct.hour}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <h5>No hay funciones aun</h5>
                )
              ) : (
                <h5 className="text-center">
                  Selecciona un cine para ver las funciones disponibles
                </h5>
              )}
            </div>
          </div>

          <div className="card" style={{ borderRadius: 20 }}>
            <div className="card-body p-0">
              <div className="row">
                <div className="col-md-4 text-center bg-dark text-white p-4">
                  <h3 className="card-title">{movie.name}</h3>
                  <img
                    src={movie.poster}
                    alt="poster"
                    style={{ width: "100%" }}
                  />
                  <h5 className="bg-light p-1">
                    <span className="badge badge-light mr-1">
                      {movie.duration} min.
                    </span>
                    <span className="badge badge-primary mr-1">
                      {movie.genre}
                    </span>
                    <span className="badge badge-secondary">
                      {movie.certification}
                    </span>
                  </h5>
                  <button className="btn btn-info btn-block">
                    Consultar horarios
                  </button>
                </div>
                <div className="col-md-8 px-5 py-3">
                  <h3>Trailer</h3>
                  <iframe
                    width="100%"
                    height="360"
                    src={movie.trailer}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="trailer"
                  />
                  <h3>Sinopsis</h3>
                  <p className="card-text text-justify">{movie.synopsis}</p>
                  <hr />
                  <h4>Reparto</h4>
                  <p className="card-text">
                    <b>Actores: </b> {movie.actors}
                    <br />
                    <b>Directores: </b> {movie.director}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
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
