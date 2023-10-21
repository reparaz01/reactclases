import { Component } from "react";
import SumaHijo from "./SumaHijo";

class SumaPadre extends Component {
  // Declaramos un array de nombres
  // Dentro de state para que sea dinamico
  

  state = {
    numeros: [27, 144, 13], total: 0
  };

  // Metodo para generar nuevo nombre
  generarNumero = () => {
    this.state.numeros.push(parseInt(Math.random() * 100 + 1));
    this.setState({
      numeros: this.state.numeros,
    });
  };

  sumaNumeros = (numeroSeleccionado) => {
    // Modificamos el state para indicar el favorito
    this.setState({ total: this.state.total + numeroSeleccionado });
  };

  render() {
    return (
      <div>
        <h1>Suma: {this.state.total}</h1>
        <button onClick={() => this.generarNumero()}>Generar Número</button>
        <hr></hr>
        {
          // este codigo react debe contener un return y es codigo logico que utiliza la sintaxis JSX
          this.state.numeros.map((numero, index) => {
            // nunca podemos dejar vaio este codigo, debe contener un return
            return (
              <div>
                <SumaHijo numero={numero} key={index} sumaNumeros={this.sumaNumeros}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default SumaPadre;
