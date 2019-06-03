import React from "react";

const FilmsBar = props => (
  <div
    className="d-flex flex-column bd-highlight flex-wrap align-content-start"
    style={{
      height: 400,
      overflowY: "hidden",
      overflowX: "auto",
      width: "100%"
    }}
  >
    {props.children}
  </div>
);

export default FilmsBar;
