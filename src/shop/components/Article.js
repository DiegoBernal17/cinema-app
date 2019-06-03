import React from "react";

const Article = props => (
  <div className="card m-2" onClick={props.onClick}>
    <div className="card-body text-center px-0">
      <img
        src={require("../imgs/" + props.icon)}
        alt={props.children}
        className="d-block mb-2 mx-auto px-4"
        style={{ width: 160 }}
      />
      <h4 className="bg-warning p-2">{props.children}</h4>
    </div>
  </div>
);

export default Article;
