import "./index.css";
import CardList from "./CardList";
import TopComponent from "./TopComponent";
import { useState, useEffect } from "react";

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increment = () => {
    let incrementedScore = score + 1;
    setScore(incrementedScore);
    if(highScore < incrementedScore) 
      setHighScore(incrementedScore);
  }

  const resetScore = () => {
    setScore(0);
  }
  // useEffect(() => {
  //   // console.log("Score has changed");
  // }, [resetScore]);


  return (
    <div className="App">
      
     <div className="main-top">
      <TopComponent score={score} highScore={highScore} resetScore={resetScore}/>
     </div>
     <div className="main-bottom">
     <CardList increment={increment} resetScore={resetScore}/>
     </div>
    </div>
  );
}

export default App;
