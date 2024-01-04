// MainComponent.js
import React, { useState } from 'react';
import Card from './Card';

export const Lang = () => {
  // State to store the list of cards
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', content: 'Content 1' },
    // { id: 2, title: 'Card 2', content: 'Content 2' },
  ]);

  // Function to add a new card
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      content: `Content ${cards.length + 1}`,
    };

    setCards([...cards, newCard]);
  };

  return (
    <div>
      <button onClick={addCard}>Add Card</button>
      <div className="card-container d-flex gap-5 ">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
        
      </div>
    </div>
  );
};


