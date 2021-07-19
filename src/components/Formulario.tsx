import React from 'react'

type Formulariorops =  {
    userName: string,
    nombre: string,
    apellido: string,
    estado: boolean,
};

const Formulario = (props: Formulariorops) => {
    const [estadoAtual, setEstadoAtual] = React.useState<boolean>(props.estado);

    const handleChange = (e:any) => {
        setEstadoAtual(e.target.checked);
    }


    const handleSubmit = () => {
        if(estadoAtual){
            alert(`El estado está: ${estadoAtual} por lo tanto el username está activo`);
        }
        else{             
            alert(`El estado está: ${estadoAtual} por lo tanto el username está inactivo`);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor ="inputUsername">Username</label>
                <input disabled type="text" className="form-control"  id="inputUsername" placeholder="Username" value={props.userName}/>
            </div>

            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor ="inputNombre">Nombre</label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" value={props.nombre}/>
                </div>

                <div className="form-group col-md-6">
                <label htmlFor ="inputApellido">Apellido</label>
                <input type="text" className="form-control" id="inputApellido" placeholder="Apellido" value={props.apellido}/>
                </div>              
            </div>
         
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" 
                checked={estadoAtual}                  
                onClick={handleChange} />
                <label className="form-check-label" htmlFor="gridCheck">
                    Estado (Activo/Inactivo)
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            
        </>
    )
}

export default Formulario;