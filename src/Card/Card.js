import React from 'react';
import './Card.css';

const Card = ({reservation}) => {
  console.log(reservation);
  return(
    <section key={reservation.id} className='card'>
      <h3 className='card-details'>Name: {reservation.name}</h3>
      <p className='card-details'>Date: {reservation.date}</p>
      <p className='card-details'>Time: {reservation.time}</p>
      <p className='card-details'>Number of guests: {reservation.number}</p>
    </section>
  )
}

export default Card;
