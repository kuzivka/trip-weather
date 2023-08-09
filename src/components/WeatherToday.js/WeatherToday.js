import React from 'react';
import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../services/weather';
import { backgrounds } from '../../common/bckgr';
import './weatherToday.css';
import { DAYS_OF_WEEK } from '../../common/constants';
import { icons } from '../../common/icons';
import Timer from '../Timer/Timer';

export default function WeatherToday() {
  const selectedTrip = useSelector((state) => state.trip.chosenTrip);
  const tripDetails = useSelector((state) =>
    state.trip.trips.find((trip) => trip.id === selectedTrip)
  );

  const { data } = useGetWeatherQuery(tripDetails.cityName);

  const dayToday = DAYS_OF_WEEK[new Date().getDay()];
  const tempCels = (temp) => (((temp - 32) * 5) / 9).toFixed(0);

  return (
    <>
      {data && (
        <div
          className="weather-today"
          style={{
            backgroundImage: `url(${backgrounds[data.currentConditions.icon]})`,
          }}
        >
          <span className="week-day">{dayToday}</span>
          <div className="weather-details">
            <img
              className="weather-icon"
              src={icons[data.currentConditions.icon]}
              alt="weather"
            />
            <span className="temp">
              {tempCels(data.currentConditions.temp)}
            </span>
            <span className="degre">{'\u00B0'}C</span>
          </div>
          <span className="today-city">{tripDetails.cityName}</span>
          <Timer startTime={tripDetails.startDate} />
        </div>
      )}
    </>
  );
}
