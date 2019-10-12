{}import React, { Component } from "react";
import Periodos from "./periodos";
import { getPeriodos, getTipoPeriodos } from "../services/periodoService";
import { calculaISR } from "../services/tarifaService";
import TiposPeriodo from "./tiposPeriodo";
import CampoImporte from "./campoImporte";
import Resultado from "./resultado";

class Calculadora extends Component {
  state = {
    importe: 7252.66
  };
  handleCalculo = () => {
    console.log("calculando ISR de ",this.state.importe);
  };
  handleUpdateImporte = (importeGravado) => {
    console.log("importe actualizado", importeGravado);
    this.setState({importe: importeGravado});
  };
  render() {
    return (
      <div className="card App">
        <h5 className="card-header">Calculadora de ISR</h5>
        <div className="card-body">
          <div className="row justify-content-md-center">
            <div className="col-md-6 col-lg-4 mb-3">
              <Periodos ciclos={getPeriodos()} />
              <TiposPeriodo tiposPeriodo={getTipoPeriodos()} />
              <CampoImporte 
                importe = {this.state.importe} 
                onChange={this.handleUpdateImporte} />
              <button
                className="btn btn-block btn-primary card-link"
                onClick={this.handleCalculo}
              >
                <i className="fa fa-calculator fa-faw" />
                &nbsp;Calcular mi ISR
              </button>
            </div>
            <div className="col-md-6">
              <Resultado resultados={calculaISR()} />
            </div>
          </div>
        </div>
        <div className="card-footer">&copy; 2019</div>
      </div>
    );
  }
}

export default Calculadora;
