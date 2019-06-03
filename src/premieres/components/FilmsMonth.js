import React from "react";
import Card from "../../components/Card";
import FilmsBar from "../../components/FilmsBar";

const FilmsMonth = props => (
  <div className="row">
    <div className="col-12">
      <h1>{props.title}</h1>
      <hr />
      <FilmsBar>
        {props.movies.length > 0 ? (
          props.movies.map(movie => (
            <Card image={movie.poster} title={movie.name} id={movie.id} />
          ))
        ) : (
          <h3>No hay nada aun</h3>
        )}
      </FilmsBar>
    </div>
  </div>
);

export default FilmsMonth;
