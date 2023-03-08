import { useState, useEffect } from 'react';
import { BandProps, IBand } from '../interfaces';



export const BandList = ({ data,castVotes,deleteBand,changeBandName }:BandProps) => {

    const [bands, setBands] = useState(data);

useEffect(()=>{
setBands( data )
},[ data ])

const changeName = (event:any, id:string)=>{

 const newName = (event.target.value);

 const band  = setBands( (bands:IBand[])=> bands.map((band:IBand)=>{
  if( band.id === id ){
      band.name = newName;
  }
  return band;
 }) )

 
 
}

const lostFocus = ( id:string,name:string ) =>{
    console.log({ id,name })
    changeBandName( id, name )

}
const createRows = () =>{
    return(
        
        <>
      {
        bands.map( (band:any)=>(
        <tr key={band.id} >
            <td>
                <button 
                className='btn btn-primary' 
                onClick={ ()=> castVotes(band.id) }
                >+1</button>
            </td>
            <td>
                <input type="text" 
                value={band.name}
                className='form-control'
                onChange={ (event)=>changeName(event,band.id) }
                onBlur={ ()=>lostFocus( band.id,band.name ) }
                />
            </td>
            <td><h3>{ band.votes }</h3></td>
            <td>
                <button 
                className='btn btn-danger' 
                onClick={()=>deleteBand(band.id)}
                >Borrar</button>
            </td>
        </tr>

        )  )
      }
        </>    
    )
}    
  return (
    <>
      <h3>Bandas Actuales</h3> 
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
