import React from 'react';

class Showhide extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.mostrarocultar}>Mostrar - Ocultar</button>
            </div>
        )
    }
}

export default Showhide;