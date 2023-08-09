import React from 'react';
import { useSelector } from 'react-redux';
import { useGetForecastQuery } from '../../services/weather';
import WeatherCard from '../WeatherCard/WeatherCard';
import './Forecast.css';

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
    <><h2>Forecast</h2>
      {data && (
        <div className="forecast">
          
          {data.days.map((day) => (
            <WeatherCard
              key={day.datetime}
              date={day.datetime}
              icon={day.icon}
              maxTemp={day.tempmax}
              minTemp={day.tempmin}
            />
          ))}
        </div>
      )}
    </>
  );
}
