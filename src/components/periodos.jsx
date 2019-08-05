import React, { Component } from "react";

class Periodos extends Component {
  state = {
    periodos: [2019, 2018]
  };
  render() {
    return (
      <React.Fragment>
        Seleccione un año de cálculo:&nbsp;
        <select>
          {this.state.periodos.map(periodo => (
            <option key={periodo} vaue={periodo}>
              {periodo}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default Periodos;
