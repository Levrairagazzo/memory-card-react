

const Card = ({id, message, increment, shuffle, selectCard, portrait}) => {

    


    return ( 
    <div className="card" onClick={() => {
       increment();
       shuffle();
       selectCard(id);
       console.log(`Card # + ${id}`);
    }}>
        {/* {console.log(portrait)} */}
        <img src={portrait} alt="player portrait"></img>
    </div> );
}
 
export default Card;