import { Component } from "react";

class DibujosComplejosReact extends Component {
  // Declaramos un array de nombres
  // Dentro de state para que sea dinamico
  state = {
    nombres: ["Sejo", "Adrian", "Carlos", "Diana", "Natalia"]
  }
  

  // Metodo para generar nuevo nombre
  generarNombre = () => {
    this.state.nombres.push("Julian")
    this.setState({
        nombres: this.state.nombres
    })
  }

  render() {
    return (
      <div>
        <h1>Dibujos Complejos React Colección</h1>
        <button onClick={()=> this.generarNombre()}>Generar Nombre</button>
        {
          // este codigo react debe contener un return y es codigo logico que utiliza la sintaxis JSX
          this.state.nombres.map((name, index) => {
            // nunca podemos dejar vaio este codigo, debe contener un return
            return (
              <h3 style={{ color: "blue" }} key={index}>
                {name}
              </h3>
            );
          })
        }
      </div>
    );
  }
}

export default DibujosComplejosReact;
