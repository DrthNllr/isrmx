import React, { Component } from "react";

class CampoImporte extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label
            className="input-group-text"
            id="basic-addon1"
            htmlFor="inputImporte"
          >
            Importe
          </label>
        </div>
        <input
          id="inputImporte"
          type="text"
          className="form-control"
          placeholder="Importe gravado"
          aria-label="Importe gravado"
          defaultValue={this.props.importe}
          onChange={() => this.props.onChange(this.props.id)}
        />
      </div>
    );
  }
}

export default CampoImporte;
