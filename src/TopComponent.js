const TopComponent = ({score, resetScore}) => {


   
    return ( 
    <div className="top-component">
        <h2>Memory game</h2>
      <h2>Score: {score}</h2>
      <button onClick={() => resetScore()}>Reset score</button>


    </div> );
}
 
export default TopComponent;