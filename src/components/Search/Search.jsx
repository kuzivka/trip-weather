import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="input-container">
      <span className="icon material-symbols-outlined">search</span>
      <input className="search-input" placeholder="Search your trip"></input>
    </div>
  );
}
