import { Component } from "react";

class DibujosComplejos extends Component {
    // vamos a dibujar una serie de numeros en formato html utilizando arrays y codigo HTML
    dibujarNumeros = () => {
        // declaramos un array para guardar todos los numeros en formato html com lista
        var lista = [];
        // con un bucle iremos generando numeros dinamicos para ir añadiendo elementos a la lista
        for (let i = 1; i <= 10; i++) {
            var numero = parseInt(Math.random()*100 + 1);
            // mediante el metodo push del array iremos rellenando codigo html dinamico en una variable array
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Diujos Complejos</h1>
        <ul>
            {this.dibujarNumeros()}
        </ul>
      </div>
    );
  }
}

export default DibujosComplejos;
