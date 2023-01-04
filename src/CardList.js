import Card from "./Card";
import './index.css';
import { useState, useEffect } from "react";
// import allen from "./portraits/allen.jpeg"
// import lebron from 

const CardList = ({increment, resetScore}) => {

  const [selectedCards, setSelectedCards] = useState([]);


  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('./portraits/', false, /\.(png|jpe?g|svg)$/));



const generateCard = (id, message, image) => {
    let newCard = { id:id,message:message, portrait:image };
    return newCard;
}

const selectCard = (cardID) => {

    if(selectedCards.includes(cardID)){
        alert("Card was already selected !");
        resetScore();
        setSelectedCards([]);
        return;
     }

    let cards = [...selectedCards];
        cards.push(cardID);
        setSelectedCards(cards);
   
}

const addCards = () => {
    let cardArray = [];
    for (let index = 0; index < 12; index++) {
    cardArray.push(generateCard(index, `Test Message ${index}`, images[index]));

    }
    return cardArray;
}

const shuffle = () => {

    setCards( cards.sort(() => Math.random() - 0.5))
    // console.log(cards)
}

const [cards, setCards] = useState(addCards)

useEffect(() => {
    // shuffle();
    // setSelectedCards([]);
    console.log("In useEffect")
  }, [])

    return ( 
        <div className="card-list">
            {
                cards.map(card => <Card key = {card.id} id={card.id} portrait={card.portrait} message={card.message} increment = {increment} shuffle={shuffle}
                selectCard={selectCard}/> )
            }
        </div>
     );
}
 
export default CardList;