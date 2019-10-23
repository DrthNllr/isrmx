import React, { Component } from "react";
class ResultadoItem extends Component {
  state = {
    _id: 0,
    descripcion: "",
    valor: "",
    icono: ""
  };
  formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : "")
      );
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <li
        className={
          "list-group-item list-group-item-action" +
          (this.props.icono === "exclamation-circle"
            ? " list-group-item-primary"
            : "")
        }
      >
        <div className="d-flex w-100 justify-content-between">
          <h6>
            <i className={"fa fa-" + this.props.icono + " fa-fw"} />{" "}
            {this.props.descripcion}
          </h6>
          <span>
            {this.props.tipo === "x" ?
                (this.props.tipo === "%"
                  ? this.props.valor + " %"
                  : "$ " + this.formatMoney(this.props.valor, 2, ".", ",")
                )
              :this.props.valor}
          </span>
        </div>
      </li>
    );
  }
}

export default ResultadoItem;
