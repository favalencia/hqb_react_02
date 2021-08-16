import React from 'react'


type FormularioFuncionalProps = {
  primerNumero: number;
  segundoNumero: number;
};

const FormularioFuncional = (props: FormularioFuncionalProps) => {
    function  sumar() {
      return props.primerNumero  + props.segundoNumero  ;
    };

    function  restar() {
      return props.primerNumero  - props.segundoNumero  ;
    };

    return (
      <div>
      <h1>Componente Funcional</h1>      
      <a>Esto deberia ir en un alert según la tarea. Pero es más comodo asi:</a>
      <h6>La suma es: {props.primerNumero} + {props.segundoNumero } = {sumar()}  </h6>
      <h6>La resta es: {props.primerNumero} - {props.segundoNumero } = {restar()}  </h6>
    
      </div>
    )
}

export default FormularioFuncional;