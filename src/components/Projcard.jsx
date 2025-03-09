import React from 'react';
import './Projcard.css';

export default function Expcard({ photo, t,skills,index, isSelected, onClick }) {
  return (
    <div 
      className={`Proj-card-container ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <img src={photo} alt="icon" />
      <h1>{t}</h1>
      <p className='Proj-s'>Skills: {skills}</p>
    </div>
  );
}
