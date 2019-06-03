import React from "react";
import SeatsCol from "../components/SeatsCol";
import ButtonNext from "../components/ButtonNext";
import ButtonBack from "../components/ButtonBack";

const Rooms = props => (
  <div className="card">
    <div className="card-header">Asientos</div>
    <div className="card-body">
      <div className="row">
        <div className="col text-center mb-4 bg-info py-2 text-white">
          Pantalla
        </div>
        <div className="w-100" />
        <SeatsCol
          seats={[
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "A10",
            "A11",
            "A12"
          ]}
          onClick={props.onClick}
        />
        <SeatsCol
          seats={[
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
            "B9",
            "B10",
            "B11",
            "B12"
          ]}
          onClick={props.onClick}
        />
        <SeatsCol
          seats={[
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "C7",
            "C8",
            "C9",
            "C10",
            "C11",
            "C12"
          ]}
          onClick={props.onClick}
        />
        <SeatsCol
          seats={[
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10",
            "D11",
            "D12"
          ]}
          onClick={props.onClick}
        />
        <SeatsCol
          seats={[
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6",
            "E7",
            "E8",
            "E9",
            "E10",
            "E11",
            "E12"
          ]}
          onClick={props.onClick}
        />
      </div>
      <hr />
      <ButtonBack onClick={props.beforeStep} />
      <ButtonNext onClick={props.nextStep} />
    </div>
  </div>
);

export default Rooms;
