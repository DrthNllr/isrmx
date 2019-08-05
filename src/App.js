import React from "react";
import "./App.css";
import Periodos from "./components/periodos";
import { getPeriodos, getTipoPeriodos } from "./services/periodoService";
import TiposPeriodo from "./components/tiposPeriodo";
import CampoImporte from "./components/campoImporte";

function App() {
  return (
    <div className="card App">
      <h5 className="card-header">Calculadora ISR</h5>
      <div className="card-body">
        <Periodos ciclos={getPeriodos()} />
        <TiposPeriodo tiposPeriodo={getTipoPeriodos()} />
        <CampoImporte />
        <button className="btn btn-primary card-link">
          <i className="fa fa-calculator fa-faw" />
          &nbsp; Calcular
        </button>
      </div>
    </div>
  );
}

export default App;
