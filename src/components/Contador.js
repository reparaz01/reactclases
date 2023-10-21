import { Component } from "react";

// podemos declarar metodos fuera del component, dichos metodos se declaran como 'function'
// no podremos utilizar nada de la clase dentro de ellos
function metodoExterno() {
  console.log("Funcion externa a la clase");
}

class Contador extends Component {
  //   Las variables y los metodos se declaran fura del rencder, no se utilizan palabras clave como var, let o const
  numero = 0;

  incrementarNumero = () => {
    // para haer referencia a las variables de la clase debemos utilizar la palabra 'this' siempre
    this.numero = this.numero + 1;
    console.log("Valor numero: " + this.numero);
  };

  // el concepto de 'state' es exactamente el mismo, variables que necsitamos que sean dibujadas
  // es decir que cambien el 'render()' dichas variables van declaradas como objeto dentro del 'state'
  state = {
    valor: parseInt(this.props.inicio),
  };

  // creamos metodo para incrementar el calor del contador
  incrementarValor = () => {
    // para modificar el valor de 'state', utilizamos 'setState' indicando mediante JSON el objeto que deseamos modificar
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "purple" }}>Contador</h1>
        <h2 style={{ color: "blue" }}>Inicio contador: {this.props.inicio}</h2>
        <h2 style={{ color: "green" }}>
          Valor del contador: {this.state.valor}
        </h2>
        {/* la llamada a los metodos de la clase se realiza de forma mas sencilla, no se utilizan parentesis ni nada, solamente el nombre del metodo a ejecutar */}
        <button onClick={this.incrementarValor}>Incrementar valor</button>
        {/* Vamos a llamar a este metodo mediante una funcion anonima */}
        <button
          onClick={() => {
            // para llamar a los metodos de la clase debemos utilizar 'this'
            this.incrementarNumero();
          }}
        >
          Contador
        </button>
        <button
          onClick={() => {
            metodoExterno();
          }}
        >
          Metodo externo
        </button>
      </div>
    );
  }
}

export default Contador;
