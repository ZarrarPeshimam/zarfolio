import React from 'react';
import './Projcard.css';

export default function Projcard({ photo, t, skills, link, git, d }) {
  // Ensure skills is treated as an array even if passed as a string
  const skillArray = Array.isArray(skills) ? skills : skills.split(', ');

  return (
    <div className='Proj-card-container'>
      {/* FRONT SIDE */}
      <div className='Proj-card-front'>
        <img src={photo} alt={t} />
        <h1>{t}</h1>
        <div className='Tech-capsules'>
          {skillArray.map((skill, index) => (
            <span key={index} className='Skill-badge'>{skill}</span>
          ))}
        </div>
      </div>

      {/* BACK SIDE (HOVER DETAILS) */}
      <div className="Proj-details">
        <div className="Details-content">
          {d.split('\n').map((line, idx) => (
            <p className='Proj-dl' key={idx}>{line.trim()}</p>
          ))}
        </div>

        <div className='Proj-buttons'>
          {link.trim() !== '' && (
            <button className='Proj-btn link' onClick={() => window.open(link, "_blank")}>
              Live Demo
            </button>
          )}
          {git.trim() !== '' && (
            <button className='Proj-btn github' onClick={() => window.open(git, "_blank")}>
              GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
}