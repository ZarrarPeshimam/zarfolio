import React, { useState } from 'react';
import './Projects.css';
import Projcard from './Projcard';

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const project_list = [
        { photo: 'tictak.png', link: '', git: 'https://github.com/ZarrarPeshimam/AI_driven_tictak', t: 'AI driven Tic Tac Toe', skills: 'Python, Min-Max Algorithm',
            d: `A basic python based program operated on using min-max algorithm, containing a 2 player mode and a single player mode (against AI).\n
                2 Player: Works on basic inputting of values alternatively and finding completion of row or column or diagonal of a player. If no successful pattern is made, returns draw.\n
                Single Player: User inputs their move, Computer determines best move to play.` },
        { photo: 'amazon.jpg', link: '', git: 'https://github.com/ZarrarPeshimam/Amazon_homepg_clone', t: 'Amazon homepage clone', skills: 'HTML, CSS, JS, UI/UX',
            d: `This project is a frontend replica of Amazon's homepage, designed to closely resemble its UI/UX, layout, and interactive elements.\n
                Faithful UI/UX Design – Mimics Amazon’s homepage layout, including navigation bars, product sections, and banners.\n
                Interactive Features – Implemented JavaScript for a dynamic shopping experience (e.g., sliding images).` }
    ];

    return (
        <div className='Proj-container'>
            <header>Projects</header>
            <div className='Proj-grid'>
                {project_list.map((e, index) => (
                    <Projcard 
                        key={index} 
                        photo={`src/components/images/proj/${e.photo}`} 
                        t={e.t} 
                        skills={e.skills} 
                        index={index}
                        isSelected={index === selectedIndex}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {selectedIndex !== -1 && (
                <div className="Proj-details">
                    <p>{project_list[selectedIndex].d}</p>
                    <div className='Proj-buttons'>
                        {project_list[selectedIndex].link.trim() !== '' && (
                            <button className='Proj-link' onClick={() => window.open(project_list[selectedIndex].link, "_blank")}>
                                Link
                            </button>
                        )}
                        {project_list[selectedIndex].git.trim() !== '' && (
                            <button className='Proj-git' onClick={() => window.open(project_list[selectedIndex].git, "_blank")}>
                                GitHub
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
