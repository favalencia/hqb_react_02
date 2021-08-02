import React from 'react'
import datos from '../data/datos.json';


const Formulario = () => {
  
    const [mensaje, setMensaje] = React.useState<string>("Bienvenid@");
    const [boton, setBoton] = React.useState<string>("Salir");
    

    const handleCambiarMensaje = (e:any) => {       
        e.preventDefault();
        setMensaje(boton=="Salir"? "Chaito": "Bienvenido")
        setBoton(boton=="Salir"? "Entrar":"Salir")
    };

    return (
        <header>      
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">{mensaje}</h1>
          <a className="btn btn-primary" href="" role="button" onClick={handleCambiarMensaje}>{boton}</a>
        </div>
      </header>
    )
}

export default Formulario;