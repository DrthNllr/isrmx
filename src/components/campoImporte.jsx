import React, { Component } from "react";
import { MDBInput} from "mdbreact";

class CampoImporte extends Component {
  state = {};
  render() {
    return (
      <MDBInput 
        material
        containerClassName="mb-3"
        label="Importe"
        prepend="$"
        defaultValue={this.props.importe}
        onChange={e => this.props.onChange(e.target.value)}
          placeholder="Importe gravado"
          aria-label="Importe gravado"
      >
      </MDBInput>
    );
  }
}

export default CampoImporte;
