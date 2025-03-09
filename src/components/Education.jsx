import React from 'react'
import SKcard from './SKcard'
import './Skills.css'
import Educard from './Educard';

export default function Skills() {
  const edu_list=[
    { photo: 'spit.png', t: 'Sardar Patel Institute of Technology',grade:'8.85/10', d:'BTech Computer Science (23-27)'},
    { photo: 'jr_college.png', t: 'Vidyanidhi Jr College of Science',grade:'89.5%',d:'11th-12th Science (21-23)'}
  ];
  return (
    <div className='Edu-container'>
        <header>Education</header>
        <div className='Edu-grid'>
          {edu_list.map((e,index)=>(
            <Educard key={index} photo={`public/images/${e.photo}`} t={e.t} grade={e.grade} d={e.d} />
          ))}
        </div>
    </div>
  )
}
