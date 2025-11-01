import React from 'react'
import SKcard from './SKcard'
import './Education.css'

export default function Eduaction() {
  const skills_list=[
    { photo: 'java.png', t: 'Java' },
    { photo: 'cpp.png', t: 'C/C++' },
    { photo: 'python.png', t: 'Python' },
    { photo: 'dsa.png', t: 'DSA' },
    { photo: 'sql.png', t: 'SQL' },
    { photo: 'react.png', t: 'React' },
    { photo: 'node.png', t: 'MERN Stack' },
    { photo: 'pandas.png', t: 'Pandas' },
    { photo: 'canva.png', t: 'Canva' }
  ];
  return (
    <div className='Skill-container'>
        <header>Skills</header>
        <div className='SK-grid'>
          {skills_list.map((e,index)=>(
            <SKcard key={index} photo={`/images/${e.photo}`} t={e.t} />
          ))}
        </div>
    </div>
  )
}
