import React from 'react';
import './Card.css';

const Card = ({reservation}) => {
  console.log(reservation);
  return(
    <section key={reservation.id}>
      <h3>Name: {reservation.name}</h3>
      <p>Date: {reservation.date}</p>
      <p>Time: {reservation.time}</p>
      <p>Number of guests: {reservation.number}</p>
    </section>
  )
}

export default Card;
