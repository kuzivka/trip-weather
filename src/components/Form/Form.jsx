import React, { useId, useState } from 'react';
import { cities } from '../../common/cities';
import './Form.css';
import add from 'date-fns/add';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../store/reducer';

export default function Form() {
  const dispatch = useDispatch();
  const id = useId();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');

  const minDate = () => new Date().toISOString().split('T')[0];
  const maxDate = add(new Date(), { days: 15 }).toISOString().split('T')[0];

  const focusHandle = (event) => {
    event.target.type = 'date';
  };
  const blurHandle = (event) => {
    event.target.type = 'text';
  };
  const startInputHandle = (event) => {
    setStartDate(event.target.value);
  };
  const endInputHandle = (event) => {
    setEndDate(event.target.value);
  };

  const cancelHandle = () => {
    setStartDate('');
    setEndDate('');
  };

  const citySelectHandle = (event) => {
    setCity(event.target.value);
  };

  const createTrip = () => ({ id, startDate, endDate, cityName: city });

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(addTrip(createTrip()));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandle}>
        <div className="header-container">
          <h2 className="form-header">Create trip</h2>
          <span className="material-symbols-outlined close-icon">close</span>
        </div>
        <select
          className="input"
          required
          name="city"
          id="city"
          onChange={citySelectHandle}
        >
          <option className="select-placeholder" defaultValue value="">
            Please select a city
          </option>
          {cities.map((city) => (
            <option key={city.name}>{city.name}</option>
          ))}
        </select>

        <input
          required
          className="input"
          min={minDate()}
          max={maxDate}
          value={startDate}
          onChange={startInputHandle}
          type="text"
          name="start-date"
          placeholder="Select a date"
          id="start-date"
          onFocus={focusHandle}
          onBlur={blurHandle}
        />
        <input
          required
          className="input"
          value={endDate}
          onInput={endInputHandle}
          type="text"
          min={startDate}
          max={maxDate}
          name="end-date"
          placeholder="Select a date"
          id="end-date"
          onFocus={focusHandle}
          onBlur={blurHandle}
        />
        <div className="form-btns">
          <button type="reset" onClick={cancelHandle} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
