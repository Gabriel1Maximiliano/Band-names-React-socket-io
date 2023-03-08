import { IBand } from "./IBand";

export interface BandProps {

    data          : IBand[];
    castVotes     :(id: string) => void;
    deleteBand    :(id: string) => void;
    changeBandName:(id: string, name: string) => void;
    
    
}