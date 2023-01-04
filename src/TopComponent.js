const TopComponent = ({score, resetScore, highScore}) => {


   
    return ( 
    <div className="top-component">
      <h1 className="title">Memory game</h1>
      <h2>Current score: {score}</h2>
      <h2>High score: {highScore}</h2>
      <button onClick={() => resetScore()}>Reset score</button>


    </div> );
}
 
export default TopComponent;