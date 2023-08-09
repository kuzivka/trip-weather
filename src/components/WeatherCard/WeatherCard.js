import React from 'react';
import { DAYS_OF_WEEK } from '../../common/constants';
import { icons } from '../../common/icons';
import './WeatherCard.css';

export default function WeatherCard({ date, icon, maxTemp, minTemp }) {
  const day = DAYS_OF_WEEK[new Date(date).getDay()];
  const iconUrl = icons[icon];
  const temp = `${maxTemp.toFixed(0)}\u00B0/${minTemp.toFixed(0)}\u00B0`;
  return (
    <div className="weather-card">
      <h3 className='forecast-day'>{day}</h3>
      <img className="forecast-icon" src={iconUrl} alt={icon} />
      <p className="forecast-temp">{temp}</p>
    </div>
  );
}
