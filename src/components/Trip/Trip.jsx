import React from 'react';
import './trip.css';
import Me from '../../assets/img/me.jpg';

export default function Trip() {
  const cityName = 'Berlin';
  const dates = '12.23.2023 - 12.12.2002';
  return (
    <div className="trip-card">
      <img className="city-photo" src={Me} alt="" />
      <div className="trip-details">
        <h2 className="city-name">{cityName}</h2>
        <p className="dates">{dates}</p>
      </div>
    </div>
  );
}
