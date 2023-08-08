import React from 'react';
import './AddBtn.css';

export default function AddBtn() {
  return (
    <button className="add-btn">
      <span className="material-symbols-outlined add-icon">add</span>
      <span className="add-text">Add trip</span>
    </button>
  );
}
