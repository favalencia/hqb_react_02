import React from 'react'
import FormularioClase from './FormularioClase';
import FormularioFuncional from './FormularioFuncional';


const Formulario = () => {
  
  const [primeroInt, setPrimeroInt] = React.useState<number | undefined>(undefined);
  const [segundoInt, setSegundoInt] = React.useState<number | undefined>(undefined);

  const [primero, setPrimero] = React.useState<number>(0);
  const [segundo, setSegundo] = React.useState<number>(0);

  function handlerPrimeroOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPrimero(Number(event.target.value));
    setPrimeroInt(Number(event.target.value));
  };

  function handlerSegundoOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSegundo(Number(event.target.value));
    setSegundoInt(Number(event.target.value));
  };

 

    return (
      <form>        
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Primer Nº</label>
            <div className="col-sm-10">
            <input type="number" value={primeroInt} onChange={handlerPrimeroOnChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label  className="col-sm-2 col-form-label">Segundo Nº</label>
            <div className="col-sm-10">
            <input type="number" value={segundoInt} onChange={handlerSegundoOnChange}/>
            </div>
          </div>

        <div className="form-group col-md-4">
        <div className="form-group row">
        <FormularioClase 
          primerNumero={primero} 
          segundoNumero={segundo}/>
        </div>
        </div>

        <div className="form-group col-md-4">
        <div className="form-group row">
        <FormularioFuncional
          primerNumero={primero} 
          segundoNumero={segundo}/>
        </div>
        </div>
        
      </form>
    )
}

export default Formulario;