import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./env.relay";

const Demo = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query appQuery {
        cinemas {
          id
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      return (
        <div>
          Cinemas: {props.cinemas.map(cinema => `<div>${cinema.id}</div>`)}
        </div>
      );
    }}
  />
);

export default Demo;
