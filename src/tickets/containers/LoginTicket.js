import React from "react";
import Login from "../../login/containers/Login";
import ButtonNext from "../components/ButtonNext";
import ButtonBack from "../components/ButtonBack";

const LoginTicket = props => (
  <div>
    <Login />
    <ButtonBack onClick={props.beforeStep} />
    <ButtonNext onClick={props.nextStep} />
    <p className="float-right mr-1">Puedes continuar como invitado</p>
  </div>
);

export default LoginTicket;
