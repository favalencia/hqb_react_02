import React from 'react'
import datos from '../data/datos.json';


const Formulario = () => {
    const detalleGrilla = datos.Datos.map((item) =>
            <tr key= {item.ID}>
                <td>{item.ID}</td>
                <td>{item.AreaDocumental}</td>
                <td>{item.TipoDocumento}</td>
            </tr>
    );
    
    return (
        <>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Área Documental</th>
                <th scope="col">Nombre Tipo Documento</th>
                </tr>
            </thead>
            <tbody>
               {detalleGrilla}                            
            </tbody>
        </table>
        </>
    )
}

export default Formulario;