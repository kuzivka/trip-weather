import React from 'react';
import { useSelector } from 'react-redux';
import { useGetForecastQuery } from '../../services/weather';
import WeatherCard from '../WeatherCard/WeatherCard';

export default function Forecast() {
  const tripId = useSelector((store) => store.trip.chosenTrip);
  const trip = useSelector((store) =>
    store.trip.trips.find((trip) => trip.id === tripId)
  );
  const { data } = useGetForecastQuery(
    trip.cityName + '/' + trip.startDate + '/' + trip.endDate
  );
  if (data) {
    console.log(data);
  }

  return (
    <>
      {data && (
        <div>
          {data.days.map((day) => (
            <WeatherCard  />
            <div>{day.temp}</div>
          ))}
        </div>
      )}
    </>
  );
}
