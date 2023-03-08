import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";


interface Props {
    serverPath:string;
}
export const useSockets = ( { serverPath }:Props ) => {

    const socket = useMemo(() =>io(serverPath, {transports: ["websocket"],}) , [serverPath]); 
    const [onLine, setOnLine] = useState<boolean>(false);
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
      return {
        socket,
        onLine,
      }
}
