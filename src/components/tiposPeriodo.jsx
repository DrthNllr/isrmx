import React, { Component } from "react";
class TiposPeriodo extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputAnio">
            Periodo
          </label>
        </div>
        <select className="custom-select">
          {this.props.tiposPeriodo.map(tipo => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default TiposPeriodo;
