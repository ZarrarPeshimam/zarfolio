import React from 'react';
import './Expcard.css';

export default function Expcard({ photo, t, role, time, isSelected, onClick }) {
  return (
    <div 
      className={`Exp-card-container ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <img src={photo} alt="icon" />
      <h1>{t}</h1>
      <p className='Exp-r'>{role}</p>
      <p className='Exp-t'>{time}</p>
    </div>
  );
}
