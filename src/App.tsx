import { AddBand, BandList } from "./components";
import { useEffect, useState } from "react";

import { IBand } from "./interfaces";
import { useSockets } from "./hooks";

const serverPath = 'http://localhost:3000';


const App = () => {
  
  const { socket,onLine } = useSockets({serverPath});
  
  const [bands, setBands] = useState<any>([]);
  



  useEffect(() => {
    socket.on('current-bands', ( bands:IBand[] ) => {
   
     setBands( bands )
    });
  }, [socket]);


  const castVotes = (id:string) =>{
    
    socket.emit('band-vote', id);
  }

  const deleteBand = ( id:string ) =>{
   
    socket.emit('delete-band', id);
  }
  
  const changeBandName =( id:string, name:string )=>{
    console.log('change name band '+id+' '+ name)
     socket.emit('change-band-name',{ id, name })
  }

  const createBand = (name :string) =>{
    socket.emit('create-new-band', {name})
  }

  return (
    <div className="container">
      <div className="alert">
        {onLine ? (
          <p>
            Serice status <span className="text-success">onLine</span>
          </p>
        ) : (
          <p>
            Serice status <span className="text-danger">offLine</span>
          </p>
        )}
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
          data={ bands } 
          castVotes={ castVotes }
          deleteBand={ deleteBand }
          changeBandName={ changeBandName }
        
          />
        </div>
        <div className="col-4">
          <AddBand 
            createBand={ createBand }
            />
        </div>
      </div>
    </div>
  );
};

export default App;
