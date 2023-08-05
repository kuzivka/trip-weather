import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Trip from '../components/Trip/Trip';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <Search />
      <Trip />
    </div>
  );
}
