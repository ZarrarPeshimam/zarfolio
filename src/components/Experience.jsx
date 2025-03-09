import React, { useState } from 'react';
import './Experience.css';
import Expcard from './Expcard';

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const exp_list = [
    { photo: 'spit.png', t: 'Alumni Student Relation Cell', role: 'Creative Team',
      d: `As a committee focusing on managing connections with alumni, my responsibilities included making posters for events and writing posts about events. 
      Designed posters & promotional content for alumni events.
      Wrote engaging posts and announcements.`, time: '2024-present' },
    { photo: 'acses.png', t: 'Acses Committee SPIT', role: 'Creative Subcom',
      d: `As a tech-cultural committee of the college, my responsibilities included creating posters for upcoming events and editing videos for the events. Created posters and promotional videos for college events.
Edited and managed event-related visual content.`, time: '2023-24' }
    //,{ photo: 'instagram.png', t: 'Poster Design', role: 'Part-time Hobby',
      //d: 'Creating poster designs as a hobby and keeping my creativity alive.', time: '2025-present' }
  ];

  return (
    <div className='Exp-container'>
      <header>Experience</header>
      <div className='Exp-grid'>
        {exp_list.map((e, index) => (
          <Expcard key={index} photo={`/images/${e.photo}`} t={e.t} role={e.role} time={e.time} index={index} 
            isSelected={index === selectedIndex} 
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      {selectedIndex !== -1 && (
        <div className="Exp-details">
          <h3>{exp_list[selectedIndex].t}</h3>
          <p>{exp_list[selectedIndex].role}</p>
          <p>{exp_list[selectedIndex].d}</p>
        </div>
      )}
    </div>
  );
}
