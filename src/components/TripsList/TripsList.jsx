import React from 'react';
import Trip from '../Trip/Trip';
import './TripsList.css';
import AddBtn from '../AddBtn/AddBtn';
import { useSelector } from 'react-redux';

export default function TripsList() {
  const trips = useSelector((state) => state.trip.trips);

  return (
    <div className="trips-list">
      {trips.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
      <AddBtn />
    </div>
  );
}
