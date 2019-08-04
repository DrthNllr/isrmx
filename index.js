import React, { Component } from 'react';
import { render } from 'react-dom';
import {getTarifasMensuales} from "./services/isr";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tarifas_mensuales: getTarifasMensuales()
    };
  }

  render() {
    return (
      <div>
        <h1>Calculadora ISR </h1>
        <p>
          Seleccione el año de cálculo

        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
