// Card.js
import React from 'react';
import logo from '../images/Rectangle-293.webp';

const Card = ({...events }) => {
  // Check if event is defined before destructuring its properties
  if (!events) {
   
    return <div>Error: Event is undefined</div>; 
    // Or some other handling for undefined event
  }

  const { event_name, event_date, price, description } = events;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={logo} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">{event_name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Event Date: {event_date}</p>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
