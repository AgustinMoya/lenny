import React, {Component} from 'react';
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";

class App extends Component {

    state = {
        citas: []
    };

    crearCita = (cita) => {
        console.log(cita)
    };

    render() {
        return (
            <div className="container">
                <Header
                    titulo={'Administrador de Pacientes de Veterinaria'}
                />
                <div className="row">
                    <div className="col-md-6">
                        <AgregarCita
                            crearCita={this.crearCita}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
