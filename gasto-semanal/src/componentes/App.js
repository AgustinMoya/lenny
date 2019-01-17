import React, { Component } from 'react'

import '../css/App.css'
import Header from './Header'
import Formulario from './Formulario'
import Listado from './Listado'
import {validarPresupuesto} from '../Helper'
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

componentDidMount() {
  this.obtenerPresupuesto()
}

obtenerPresupuesto = () =>{
let presupuesto = prompt("Cual es el presupuesto ? ")

let resultado = validarPresupuesto(presupuesto)
if (resultado){
  this.setState({
    presupuesto,
    restante: presupuesto
  })
}else {
  this.obtenerPresupuesto()
}
}

  agregarGasto = gasto => {
    const gastos = { ...this.state.gastos }

    gastos[`gasto${Date.now()}`] = gasto

    this.restarPresupuestp(gasto.cantidadGasto)

    this.setState({
      gastos
    })
  }

  //Restar del presupuesto cuando un gasto se crea

  restarPresupuestp = cantidad => {
    let restar = Number(cantidad)

    let restante = this.state.restante
    
    restante -= restar

    restante = String(restante)

    this.setState({
      restante
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
            <div className='one-half column'>
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
