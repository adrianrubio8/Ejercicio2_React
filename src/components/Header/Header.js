import classes from '*.module.css';
import React from 'react';
import './Header.module.css'

class Header extends React.Component {


    render() {
        const estilo = {
            backgroundColor: 'white',
            border: '1px solid blue'
        };
        const estilos =[];
        if (this.props.numeropersonas < 3) {
            estilos.push(clases.rojo);
        }
        if (this.props.numeropersonas < 2) {
            estilos.push(clases.negrita);
        }
        return (
            <div className={classes.Header}>
                <h1>{this.props.titulo}</h1>
                <p className={estilos.join(' ')} >Parece que funciona</p>
                <button style={estilo} onClick={this.props.cambiandounnombre}>Cambio un nombre</button>
            </div>
        )
    }
}

export default Header;