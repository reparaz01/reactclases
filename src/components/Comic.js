import { Component } from "react";

class Comic extends Component {
    render() {
        return (
            <div>
                <h1>Comic {this.props.comic.titulo}</h1>
                <h2>{this.props.comic.descripcion}</h2>
                <img src={this.props.comic.imagen} style={{ width: "150px" }}></img><br></br>
                <button onClick={() => {
                    this.props.seleccionarFavorito(this.props.comic);
                }}>Select Fav</button>
                <button
                onClick={() => {
                    this.props.eliminarComic(parseInt(this.props.index));
                }}
                >Borrar Comic</button>
            </div>
        )
    }
}

export default Comic