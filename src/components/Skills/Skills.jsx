import React from 'react';
import SKcard from './SKcard';
import '../Skills/Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        { photo: 'react.png', t: 'React' },
        { photo: 'tailwind.png', t: 'Tailwind CSS' },
        {photo: 'javascript.png', t: 'JavaScript' },
        {photo: 'typescript.png', t: 'TypeScript' },
        { photo: 'node.png', t: 'Node.js' },
        { photo: 'express.png', t: 'Express.js' },
        {photo:'next.png', t: 'Next.js'},
      ]
    },
    {
      category: "Database",
      skills: [
        { photo: 'sql.png', t: 'mySQL' },
        {photo: 'postgre.png', t: 'PostgreSQL' },
        { photo: 'mongo.png', t: 'MongoDB' },

      ]
    },
    {
      category: "AI / ML",
      skills: [
        { photo: 'python.png', t: 'Python' },
        { photo: 'pandas.png', t: 'Pandas' },
        { photo: 'numpy.png', t: 'NumPy' },
        { photo: 'sklearn.png', t: 'Scikit-Learn' },
        //{ photo: 'seaborn.png', t: 'Seaborn' },
      ]
    },
    {
      category: "Programming & Tools",
      skills: [
        { photo: 'java.png', t: 'Java' },
        { photo: 'cpp.png', t: 'C/C++' },
        /*{ photo: 'canva.png', t: 'Canva' },*/
      ]
    }
  ];

  return (
    <div className='Skill-container'>
      <header>My Skills</header>
      
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="Skill-category-section">
          <h3 className="category-title">{cat.category}</h3>
          <div className='SK-grid'>
            {cat.skills.map((skill, index) => (
              <SKcard key={index} photo={`/images/${skill.photo}`} t={skill.t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}