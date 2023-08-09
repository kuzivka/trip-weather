import React from 'react';
import Trip from '../Trip/Trip';
import './TripsList.css';
import AddBtn from '../AddBtn/AddBtn';
import { useSelector } from 'react-redux';

export default function TripsList({ setModalState }) {
  const trips = useSelector((state) =>
    state.trip.trips.filter((trip) =>
      trip.cityName.toLowerCase().includes(state.trip.searchQuery.toLowerCase())
    )
  );

  return (
    <div className="trips-list">
      {trips.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
      <AddBtn setModalState={setModalState} />
    </div>
  );
}
