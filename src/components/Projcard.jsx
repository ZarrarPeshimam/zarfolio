import React from 'react';
import './Projcard.css';

export default function Projcard({ photo, t,skills,index, link,git,d }) {
  return (
    <>
    <div 
      className='Proj-card-container' >
        <div className='Proj-card-front'>
        <img src={photo} alt="icon" />
        <h1>{t}</h1>
        <p className='Proj-s'>Skills: {skills}</p>
      </div>
      <div className="Proj-details">
        
        {d.split('\n').map((line, idx) => (
            <p className='Proj-dl' key={idx}>{line.trim()}</p> // Trim removes unwanted spaces
        ))}

<div className='Proj-buttons'>
            {link.trim() !== '' && (
                <button className='Proj-link' onClick={() => window.open(link, "_blank")}>
                    Link
                </button>
            )}
            {git.trim() !== '' && (
                <button className='Proj-git' onClick={() => window.open(git, "_blank")}>
                    GitHub
                </button>
            )}
        </div>
        
    </div>
    </div>
    </>
  );
}
