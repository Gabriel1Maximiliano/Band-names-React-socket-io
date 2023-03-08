import { FormEvent, useState } from 'react';
import { BandProps } from '../interfaces/BandProps';

interface AddBandProp {
  createBand: (name: string) => void
}

export const AddBand = ( { createBand }: AddBandProp ) => {

  const [newBand, setNewBand] = useState<string>('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>)=>{

    ev.preventDefault();
    if( newBand.trim().length > 2 ){
       //TODO llamar a la funcion
       createBand(newBand)
    }

    setNewBand('');
  }
  return (
    <>
    <h3>Agregar banda </h3>
        <form onSubmit={ handleSubmit } >
            <input type="text" 
            className="form-control"
            placeholder="Nuevo nombre de banda"
            value={ newBand }
            onChange={ (e)=>setNewBand(e.target.value) }
            
            />
        </form>
   
    </>
  )
}
