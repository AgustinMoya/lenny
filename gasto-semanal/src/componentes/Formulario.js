import React, { Component } from 'react'
import PropTypes from 'prop-types';

class FormularioGasto extends Component {
  nombreGasto = React.createRef()
  cantidadGasto = React.createRef()

  crearGasto = e => {
    e.preventDefault()

    const gasto = {
      nombreGasto: this.nombreGasto.current.value,
      cantidadGasto: this.cantidadGasto.current.value
    }

    this.props.agregarGasto(gasto)

    e.currentTarget.reset()
  }

  render () {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className='campo'>
          <label>Nombre Gasto</label>
          <input
            className='u-full-width'
            type='text'
            placeholder='Ej. Transporte'
            ref={this.nombreGasto}
          />
        </div>

        <div className='campo'>
          <label>Cantidad</label>
          <input
            className='u-full-width'
            type='text'
            placeholder='Ej. 300'
            ref={this.cantidadGasto}
          />
        </div>

        <input
          className='button-primary u-full-width'
          type='submit'
          value='Agregar'
        />
      </form>
    )
  }
}

FormularioGasto.propTypes = {
  agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto
