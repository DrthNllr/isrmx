import React, { Component } from "react";
import { getPeriodos, getTipoPeriodos } from "../services/periodoService";
import { calculaISR } from "../services/tarifaService";
import { MDBBtn, MDBContainer} from "mdbreact";
import Periodos from "./periodos";
import TiposPeriodo from "./tiposPeriodo";
import CampoImporte from "./campoImporte";
import Resultado from "./resultado";


class Calculadora extends Component {
  state = {
    importe: 0,
    periodo: 'mensual',
    anio: 2019,
    resultadoCalculo: []
  };
  handleCalculo = () => {
    console.log("calculando ISR de ",this.state.importe);
    this.setState({'resultadoCalculo' : calculaISR(this.state.periodo, this.state.anio, this.state.importe)})
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
          <MDBContainer>
          <div className="row justify-content-md-center">
            <div className="col-md-6 col-lg-4 mb-3">
              <Periodos ciclos={getPeriodos()} />
              <TiposPeriodo tiposPeriodo={getTipoPeriodos()} />
              <CampoImporte 
                importe = {this.state.importe} 
                onChange={this.handleUpdateImporte} />
              <MDBBtn className="btn-block" onClick={this.handleCalculo} color="primary" >
                    Calcular mi ISR
                    </MDBBtn>
            </div>
            <div className="col-md-6">
              <Resultado resultados={this.state.resultadoCalculo} />
            </div>
          </div>
          </MDBContainer>
        </div>
        <div className="card-footer">&copy; 2019</div>
      </div>
    );
  }
}

export default Calculadora;
