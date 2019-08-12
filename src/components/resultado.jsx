import React, { Component } from "react";
import ResultadoItem from "./resultadoItem";
class Resultado extends Component {
  state = {
    resultados: [
      {
        _id: 0,
        descripcion: "Ingreso mensual",
        valor: "7252.66",
        icono: "arrow-circle-o-right",
        tipo: "$"
      },
      {
        _id: 1,
        descripcion: "Lim. Inf",
        valor: "4910.19",
        icono: "minus",
        tipo: "$"
      },
      {
        _id: 2,
        descripcion: "Base",
        valor: "2342.47",
        icono: "arrow-circle-o-right",
        tipo: "$"
      },
      {
        _id: 3,
        descripcion: "Tasa",
        valor: "11",
        icono: "times",
        tipo: "%"
      },
      {
        _id: 4,
        descripcion: "Resultado",
        valor: "254.86",
        icono: "arrow-circle-o-right",
        tipo: "$"
      },
      {
        _id: 5,
        descripcion: "Cuota fija",
        valor: "283.33",
        icono: "plus",
        tipo: "$"
      },
      {
        _id: 6,
        descripcion: "ISR",
        valor: "543.19",
        icono: "exclamation-circle",
        tipo: "$"
      },
      {
        _id: 7,
        descripcion: "Subsidio",
        valor: "217.61",
        icono: "minus",
        tipo: "$"
      },
      {
        _id: 99,
        descripcion: "ISR o Subsidio",
        valor: "325.58",
        icono: "exclamation-circle",
        tipo: "$"
      }
    ]
  };
  render() {
    return (
      <ul className="list-group">
        {this.state.resultados.map(resultado => (
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
