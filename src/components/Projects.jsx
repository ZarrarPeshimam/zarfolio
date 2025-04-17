import React, { useState } from 'react';
import './Projects.css';
import Projcard from './Projcard';

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const project_list = [
        { photo: 'amazon.jpg', link: 'https://amazonhomepage-clone-2024.netlify.app/', git: 'https://github.com/ZarrarPeshimam/Amazon_homepg_clone', t: 'Amazon homepage clone', skills: 'HTML, CSS, JS, UI/UX',
            d: `This project is a frontend replica of Amazon's homepage, designed to closely resemble its UI/UX, layout, and interactive elements.\n
                Faithful UI/UX Design – Mimics Amazon’s homepage layout, including navigation bars, product sections, and banners.\n
                Interactive Features – Implemented JavaScript for a dynamic shopping experience (e.g., sliding images).` },
        { photo: 'sport.png', link: 'https://teamjfe.netlify.app/', git: 'https://github.com/rayysidd/FrontEndJ.git', t: 'Sports Web', skills: 'ReactJS, UI/UX',
            d: `Sports Web is a dynamic platform designed for sports enthusiasts, delivering the latest updates, live scores, in-depth analysis, and exclusive content across various sports. 
            Whether you're a passionate football fan, a cricket lover, or an esports follower, Sports Web keeps you connected to your favorite games, teams, and players in real time.` },
        { photo: 'tictak.png', link: '', git: 'https://github.com/ZarrarPeshimam/AI_driven_tictak', t: 'AI driven Tic Tac Toe', skills: 'Python, Min-Max Algorithm',
            d: `A basic python based program operated on using min-max algorithm, containing a 2 player mode and a single player mode (against AI).\n
                2 Player: Works on basic inputting of values alternatively and finding completion of row or column or diagonal of a player. If no successful pattern is made, returns draw.\n
                Single Player: User inputs their move, Computer determines best move to play.` }
        ,{ photo: 'plane.png', link: '', git: 'https://github.com/ZarrarPeshimam/Travel-Booking-site', t: 'Ticket Booking Office', skills: 'mySQL, HTML, CSS, JS, NodeJS',
            d: `TravelEase is a one-stop travel booking platform that makes planning and booking your trips seamless and hassle-free. 
            Whether you're looking for flights, hotels, rental cars, or complete vacation packages, TravelEase offers the best deals with a user-friendly interface and secure transactions.` }
    ];

    return (
        <div className='Proj-container'>
            <header>Projects</header>
            <div className='Proj-grid'>
                {project_list.map((e, index) => (
                    <Projcard 
                        key={index} 
                        photo={`/images/proj/${e.photo}`} 
                        t={e.t} 
                        skills={e.skills} 
                        index={index}
                        link={e.link}
                        git={e.git}
                        d={e.d}
                    />
                ))}
            </div>

            
        </div>
    );
}
