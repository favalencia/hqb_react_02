import React from 'react'

export type FormularioClaseProps = {
  primerNumero: number;
  segundoNumero: number;
};

class FormularioClase extends React.Component<FormularioClaseProps, any> {

  sumar() {
    return this.props.primerNumero + this.props.segundoNumero  ;
  };

  restar() {
    return this.props.primerNumero - this.props.segundoNumero  ;
  };

  render() {
    return (  
          <div>
              <h1>Componente de clase</h1>
              <a>Esto deberia ir en un alert según la tarea. Pero es más comodo asi:</a>
              <h6>La suma es: {this.props.primerNumero} + {this.props.segundoNumero } = {this.sumar()}</h6>
              <h6>La resta es: {this.props.primerNumero} - {this.props.segundoNumero } = {this.restar()}</h6>
        </div>
      )
    }
}

export default FormularioClase;