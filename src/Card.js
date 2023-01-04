import { useEffect } from "react";

const Card = ({id, message, increment, shuffle, selectCard, portrait}) => {

    // useEffect(() => {
    //     console.log('The card with ID ' + id + ' has been modified');
    //   }, [id, portrait, message, increment, shuffle, selectCard]);
    


    return ( 
    <div className="card" onClick={() => {
       increment();
       shuffle();
       selectCard(id);
       console.log(`Card # + ${id}`);
    }}>
        <img className="player-portrait" src={portrait} alt="player portrait"></img>
    </div> );
}
 
export default Card;