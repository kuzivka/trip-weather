import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import TripsList from '../components/TripsList/TripsList';
import Form from '../components/Form/Form';
import './MainPage.css';
import WeatherToday from '../components/WeatherToday.js/WeatherToday';
import Forecast from '../components/Forecast/Forecast';

export default function MainPage() {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="main-page">
      <div className="main-content">
        <Header />
        <Search />
        <TripsList setModalState={setModalState} />
        <Forecast />
        <Form modalState={modalState} setModalState={setModalState} />
      </div>
      <WeatherToday />
    </div>
  );
}
