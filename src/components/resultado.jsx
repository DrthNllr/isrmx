import React, { Component } from "react";
import ResultadoItem from "./resultadoItem";
class Resultado extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group">
        {this.props.resultados.map(resultado => (
          <ResultadoItem
            key={resultado._id}
            descripcion={resultado.descripcion}
            valor={resultado.valor}
            icono={resultado.icono}
            tipo={resultado.tipo}
          />
        ))}
      </ul>
    );
  }
}

export default Resultado;
