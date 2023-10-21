import { Component } from "react";

class SumaHijo extends Component {
  sumaPadre = () => {
    // CAPTURAMOS PROPS PARA INDICAR EL DEPORTE SELECCIONADO
    var numero = this.props.numero;
    // REALIZAMOS LA LLAMADA AL PADRE ENVIANDO EL DEPORTE
    this.props.sumaNumeros(numero);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Numero hijo: {this.props.numero}</h1>
        <button onClick={() => this.sumaPadre()}>
          Sumar {this.props.numero}
        </button>
      </div>
    );
  }
}

export default SumaHijo;

