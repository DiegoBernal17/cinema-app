import React from "react";
import FormCountTicket from "../components/FormCountTickets";
import ButtonNext from "../components/ButtonNext";

const SelectTicket = props => (
  <div>
    <div className="row mb-4">
      {props.cinema.price_normal && (
        <div className="col-md-4">
          <FormCountTicket
            title="Boleto de Adulto"
            value={props.normal}
            onClick={props.changeNormal}
            price={props.cinema.price_normal}
          />
        </div>
      )}
      {props.cinema.price_children && (
        <div className="col-md-4">
          <FormCountTicket
            title="Boleto de Niño"
            value={props.children}
            onClick={props.changeChildren}
            price={props.cinema.price_children}
          />
        </div>
      )}
      {props.cinema.price_senior && (
        <div className="col-md-4">
          <FormCountTicket
            title="Boleto de Adulto 3ra edad"
            value={props.senior}
            onClick={props.changeSenior}
            price={props.cinema.price_senior}
          />
        </div>
      )}
    </div>
    <ButtonNext onClick={props.nextStep} />
  </div>
);

export default SelectTicket;
