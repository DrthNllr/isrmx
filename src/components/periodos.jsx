import React, { Component } from "react";

class Periodos extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputAnioCalculo">
            Año
          </label>
        </div>
        <select className="custom-select" id="inputAnioCalculo">
          {this.props.ciclos.map(periodo => (
            <option key={periodo} value={periodo}>
              {periodo}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Periodos;
