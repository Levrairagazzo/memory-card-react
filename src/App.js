import "./index.css";
import CardList from "./CardList";
import TopComponent from "./TopComponent";
import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);

  const increment = () => {
    setScore(score+1);
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div className="App">
      
     <div className="main-top">
      <TopComponent score={score} resetScore={resetScore}/>
     </div>
     <div className="main-bottom">
     <CardList increment={increment} resetScore={resetScore}/>
     </div>
    </div>
  );
}

export default App;
