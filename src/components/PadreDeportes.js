import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
  deportes = ["Petanca", "Curling", "Poker", "Futbol", "Paintball"];
  // necesitamos una variable para saber el deporte favorito
  // dicha variable sera dinamica dependiendo del hijo seleccionado
  state = {
    favorito: "",
  };

  // necesitamos un metodo que recibira el deporte seleccionado desde el hijo
  mostrarFavorito = (deporteSeleccionado) => {
    // Modificamos el state para indicar el favorito
    this.setState({ favorito: deporteSeleccionado });
  };

  render() {
    return (
      <div>
        <h1>Padre Deporte</h1>
        <h2 style={{ backgroundColor: "yellow" }}>
          Su deporte favorito es: {this.state.favorito}
        </h2>
        {this.deportes.map((deporte, index) => {
          return (
            <HijoDeporte
              nombre={deporte}
              key={index}
              mostrarFavorito={this.mostrarFavorito}
            />
          );
        })}
      </div>
    );
  }
}

export default PadreDeportes;
