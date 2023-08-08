import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import TripsList from '../components/TripsList/TripsList';
import Form from '../components/Form/Form';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="main-content">
        <Header />
        <Search />
        <TripsList />
        <Form />
      </div>
      <div className="side-weather"> </div>
    </div>
  );
}
