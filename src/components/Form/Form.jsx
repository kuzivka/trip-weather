import React, { useState } from 'react';
import { cities } from '../../common/cities';
import './Form.css';
import add from 'date-fns/add';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../store/reducer';
import { v4 as uuidv4 } from 'uuid';
import ReactModal from 'react-modal';

export default function Form({ modalState, setModalState }) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');

  const minDate = () => new Date().toISOString().split('T')[0];
  const maxDate = add(new Date(), { days: 15 }).toISOString().split('T')[0];

  console.log(city);
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
    setModalState(false);
  };

  const citySelectHandle = (event) => {
    setCity(event.target.value);
  };

  const createTrip = () => ({
    id: uuidv4(),
    startDate,
    endDate,
    cityName: city,
  });

  const submitHandle = (event) => {
    setModalState(false);
    event.preventDefault();
    dispatch(addTrip(createTrip()));
    setStartDate('');
    setEndDate('');
  };
  const handleClose = () => {
    setModalState(false);
    setStartDate('');
    setEndDate('');
  };

  return (
    <ReactModal
      ariaHideApp={false}
      overlayClassName={'modal-background'}
      className={'modal'}
      isOpen={modalState}
    >
      <div className="form-container">
        <form className="form" onSubmit={submitHandle}>
          <div className="header-container">
            <h2 className="form-header">Create trip</h2>
            <span
              className="material-symbols-outlined close-icon"
              onClick={handleClose}
            >
              close
            </span>
          </div>
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="city">
                <span className="asterix">* </span>City
              </label>
              <select
                className="input select-input"
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
            </div>
            <div className="input-group">
              <label htmlFor="start-date">
                <span className="asterix">* </span>Start date
              </label>
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
            </div>
            <div className="input-group">
              <label htmlFor="start-date">
                <span className="asterix">* </span>End date
              </label>
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
            </div>
          </div>
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
    </ReactModal>
  );
}
