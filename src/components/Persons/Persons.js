import React from 'react';
import Person from '../Persons/Person/Person';

class Persons extends React.Component {
    componentDidMount(){
        console.log('<Persons> se ha montado');
    }

    componentWillUnmount(){
        console.log('<Persons se va a desmontar>');
    }
    render() {
        return (
            <div>
                {this.props.personas.map((persona, id) => {
                    return <Person nombre={persona.nombre}
                        key={id}
                        edad={persona.edad}
                        cambiando={(event) => this.props.cambiaNombre(event, id)}
                        borrando={() => this.props.borrapersona(id)} />
                })}
            <div/>
        )
    }
}

export default Persons;