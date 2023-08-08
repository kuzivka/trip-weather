import React from 'react';
import './trip.css';
import { cities } from '../../common/cities';
import { useDispatch } from 'react-redux';
import { chooseTrip } from '../../store/reducer';

export default function Trip({ trip }) {
  const dispatch = useDispatch();
  const cityName = trip.cityName;
  const dates = `${trip.startDate} - ${trip.endDate}`;
  const photoUrl = cities.find((city) => city.name === cityName).img;

  const cardClickHandle = () => {
    dispatch(chooseTrip(trip.cityName));
  };

  return (
    <div className="trip-card" onClick={cardClickHandle}>
      <img className="city-photo" src={photoUrl} alt={cityName} />
      <div className="trip-details">
        <h2 className="city-name">{cityName}</h2>
        <p className="dates">{dates}</p>
      </div>
    </div>
  );
}
