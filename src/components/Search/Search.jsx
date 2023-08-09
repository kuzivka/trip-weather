import React, { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import { searchTrip } from '../../store/reducer';

export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const searchValue = event.target.value.replace(/[^\w\s]/gi, '').trim();
    setSearch(searchValue);
    dispatch(searchTrip(searchValue));
  };
  return (
    <div className="input-container">
      <span className="icon material-symbols-outlined">search</span>
      <input
        onInput={handleInput}
        className="search-input"
        placeholder="Search your trip"
        value={search}
      ></input>
    </div>
  );
}
