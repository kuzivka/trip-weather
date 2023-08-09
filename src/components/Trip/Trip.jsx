import React from 'react';
import './Trip.css';
import { cities } from '../../common/cities';
import { useDispatch } from 'react-redux';
import { chooseTrip } from '../../store/reducer';
import { format } from 'date-fns';

export default function Trip({ trip }) {
  const dispatch = useDispatch();
  const cityName = trip.cityName;
  const dates = `${format(new Date(trip.startDate), 'dd.MM.yyyy')} - ${format(
    new Date(trip.endDate),
    'dd.MM.yyyy'
  )}`;
  const photoUrl = cities.find((city) => city.name === cityName).img;

  const cardClickHandle = () => {
    dispatch(chooseTrip(trip.id));
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
