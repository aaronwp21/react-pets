import React from 'react';
import './Card.css';

function Card({ petName, petPhoto, borderColor }) {
  return (
    <li style={{border: `1px solid ${borderColor}`}} className="pet-list">
      <p>{petName}</p>
      <img src={petPhoto} alt={petName} />
    </li>
  );
}

export default Card;
