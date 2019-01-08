import React, { Component } from 'react'
import Header from './Header'
import Formulario from './Formulario'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      resultado: '',
      datos: {}
    }
  }
  
  cotizarSeguro = (datos) => {
    console.log(datos)

    const {marca, plan, year} = datos;

    //Agregar una base de 2000
    let resultado = 2000;

    //Obtener la diferencia de años y restar el 3%

    const diferencia = obtenerDiferenciaAnio(year)
    resultado -= ((diferencia * 3) * resultado) / 100
    //Europeo 30%, Americano 15%, asiatico 5% de incremento al valor actual

    resultado = calcularMarca(marca) * resultado

    let incrementoPlan = obtenerPlan(plan)

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

    const datosAutos = {
      marca,
      plan,
      year
    }

    this.setState({
      resultado,
      datos: datosAutos
    })
    
  }
  
  render () {
    return (
      <div className='contenedor'>
        <Header titulo='Cotizador de Seguro de Auto' />
        <div className='contenedor-formulario'>
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
        </div>
      </div>
    )
  }
}

export default App
