import React from "react";
import img404 from "./img/404.png";

const Error404 = () => (
  <div className="text-center p-4 mb-4">
    <img src={img404} alt="404" />
    <h1>La sección a la que quieres entrar no existe.</h1>
  </div>
);

export default Error404;
