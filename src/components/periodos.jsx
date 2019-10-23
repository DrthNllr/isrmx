import React, { Component } from "react";

class Periodos extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputPeriodo">
            Año 
          </label>
        </div>
        <select className="browser-default custom-select"
          onChange={e => this.props.onChange(e.target.value)}
        >
        {this.props.ciclos.map(ciclo => (
          <option key={ciclo} value={ciclo}>
            {ciclo}
          </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Periodos;
