import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [Cards, setCards] = useState([]);
  return (
    <div>
      {Cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Cards;
