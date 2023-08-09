import React from 'react';
import './AddBtn.css';

export default function AddBtn({setModalState}) {
  const handleClick = () => {
    setModalState(true);
  };
  return (
    <button className="add-btn" onClick={handleClick}>
      <span className="material-symbols-outlined add-icon">add</span>
      <span className="add-text">Add trip</span>
    </button>
  );
}
