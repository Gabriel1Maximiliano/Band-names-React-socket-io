import { AddBand, BandList } from "./components";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { IBand } from "./interfaces";

const connectSocketServer = () => {
  const socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  return socket;
};
const App = () => {

  const [onLine, setOnLine] = useState<boolean>(false);
  const [bands, setBands] = useState<any>([]);
  const [socket] = useState<any>(connectSocketServer());

  useEffect(() => {
    
    setOnLine(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnLine(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnLine(false);
    });
  }, [socket]);

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
    socket.emit('create-new-band', name)
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
