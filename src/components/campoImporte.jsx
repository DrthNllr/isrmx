import React, { Component } from "react";

class CampoImporte extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Importe
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Importe gravado"
          aria-label="Importe gravado"
        />
      </div>
    );
  }
}

export default CampoImporte;
