import React from 'react';
import './Expcard.css';

export default function Expcard({ photo, t, role, time, index,d }) {
  return (
    <>
    <div 
      className='Exp-card-container' 
      >
        <div className='Exp-card-front'>
          <img src={photo} alt="icon" />
          <h1>{t}</h1>
          <p className='Exp-r'>{role}</p>
          <p className='Exp-t'>{time}</p>
        </div>

    <div className="Exp-details">
      <h3>{t}</h3>
      <p>{role}</p>
      {d.split('\n').map((line, idx) => (
        <p className='Exp-dl' key={idx}>{line.trim()}</p> // Trim removes unwanted spaces
    ))}
    </div>
  </div>
  </>
);
  
}
