import React from 'react';
export default function Card(props) {
  return (
      <div className="card">
        <img src={`.././public/images/${props.coverImg}`} className="card--image" />
        <div className="card-stats">
          <span>⭐️ ${props.rating}</span>
          <span className="gray">asdasd(${props.reviewCount})</span>
          <span className="gray">${props.location}</span>
        </div>
        <p>${props.title}</p>
        <p>
          <span className="bold"> From ${props.price}</span>/person
        </p>
      </div>
  );
}