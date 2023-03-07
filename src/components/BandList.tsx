import React from 'react'

export const BandList = () => {

const createRows = () =>{
    return(
        <>
        <h3>Bandas Actuales</h3>
        <tr>
            <td>
                <button className='btn btn-primary' >+1</button>
            </td>
            <td>
                <input type="text" 
                className='form-control'/>
            </td>
            <td><h3>15</h3></td>
            <td>
                <button className='btn btn-danger' >Borrar</button>
            </td>
        </tr>
        </>    
    )
}    
  return (
    <>
    <table className='table table-stripped' >
        <thead>
            <tr>
                <th></th>
                <th>Nombres</th>
                <th>Votos</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            { createRows() }
        </tbody>
    </table>
    </>
  )
}