import React, { Component } from 'react'

import '../css/App.css'
import Header from './Header'
import Formulario from './Formulario'

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }
  agregarGasto = gasto => {
    const gastos = { ...this.state.gastos }

    gastos[`gasto${Date.now()}`] = gasto

    this.setState({
      gastos
    })
  }

  render () {
    return (
      <div className='App container'>
        <Header titulo='Gasto semanal' />
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
              <Formulario agregarGasto={this.agregarGasto} />
            </div>
            <div className='one-half column' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
