import React, { useState } from 'react';
import './Projects.css';
import Projcard from './Projcard';

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const project_list = [
        {
        photo: 'tle.png',
        link: 'https://tle-case-generator-site.vercel.app/', // add your Chrome Web Store or demo link if available
        git: 'https://github.com/ZarrarPeshimam/TLE-Case-Generator-Extension',  // add your GitHub repo link here
        t: 'TLE-Case-Generator',
        skills: 'HTML, CSS, JavaScript, Tailwind CSS, Chrome Extension',
        d: `A smart Chrome extension that generates randomized test cases for competitive programming.\n
            Users can add variables, define constraints (range, size, repetition), and instantly create valid test data.\n
            Lightweight, fast, and designed to help developers efficiently test edge cases and prevent TLEs.`
        },
        {
        photo: 'salary.png',
        link: 'https://salary-predictor-three.vercel.app/',
        git: 'https://github.com/ZarrarPeshimam/Salary-Predictor', // add your GitHub repo link here if available
        t: 'Salary Predictor',
        skills: 'React, Flask, Tailwind CSS, Random Forest, Machine Learning',
        d: `A full-stack machine learning web app that predicts salaries based on inputs like education, experience, company size, and job role.\n
            Built using React, Flask, and a trained Random Forest model for accurate, real-time predictions with a sleek Tailwind CSS UI.`
        },
        {
        photo: 'pyq.png', // Ensure you have this icon in your /images folder
        link: '', // Add live link if hosted
        git: 'https://github.com/ZarrarPeshimam/PYQ-Centre', // Update with your repo
        t: 'PYQ Centre',
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
        d: `A local-first full-stack application for organizing screenshots into custom chapters using a drag-and-drop interface.\n
            Features include real-time UI updates, a fullscreen navigation viewer, and optimized file management using Multer for local filesystem storage.\n
            Built with a robust REST API and a responsive Tailwind CSS frontend for seamless cross-device organization.`
        },
        {
        photo: 'nuturewell.png',
        link: 'https://github.com/shivenrshukla/Maternity-Help', // add your live link if deployed
        git: 'https://nurturewell.vercel.app/',  // add your GitHub repo link here
        t: 'NutureWell - Maternity Community Website',
        skills: 'Next.js, Tailwind CSS, Jitsi Meet API',
        d: `A maternity-focused community platform enabling secure doctor–patient video consultations using Jitsi Meet API.\n
            Features include user authentication with PDF verification, and a responsive blog section for engagement and knowledge sharing.`
        },
        {
        photo: 'argo.png', // Suggestion: Use an ocean/wave or database icon
        link: '', 
        git: 'https://github.com/ZarrarPeshimam/Argo-Data-Pipeline', 
        t: 'Argo Float Data Pipeline',
        skills: ['Python', 'PostgreSQL', 'Pandas', 'SQLAlchemy', 'BeautifulSoup', 'NetCDF4'],
        d: `An automated data engineering scraper developed for SIH to ingest oceanographic data from NOAA servers.\n
      The pipeline performs multi-threaded scraping of NetCDF files, converts them to structured CSVs, and executes a full ETL process into PostgreSQL.\n
      Features include a manifest-based manifest logic to skip duplicate downloads and an automated cleanup system to minimize local storage usage.`
        },
        // { photo: 'sport.png', link: 'https://teamjfe.netlify.app/', git: 'https://github.com/rayysidd/FrontEndJ.git', t: 'Sports Web', skills: 'ReactJS, UI/UX',
        //     d: `Sports Web is a dynamic platform designed for sports enthusiasts, delivering the latest updates, live scores, in-depth analysis, and exclusive content across various sports. 
        //     Whether you're a passionate football fan, a cricket lover, or an esports follower, Sports Web keeps you connected to your favorite games, teams, and players in real time.` },
        // ,
        // {
        // photo: 'tle.png',
        // link: 'https://tle-case-generator-site.vercel.app', // add live site link if hosted
        // git: 'https://github.com/ZarrarPeshimam/TLE-Generator-Download-Portal',  // add GitHub repo link here
        // t: 'TLE Generator - Download Portal',
        // skills: 'MERN Stack, Tailwind CSS, Analytics',
        // d: `Developed a full-stack MERN download portal for extension distribution, demo videos, analytics (downloads & visits), and user feedback collection.\n
        //     Serves as the main landing page for the TLE Generator, featuring an overview, video demos, and a one-click download link.\n
        //     Designed with Tailwind CSS for a clean, responsive, and modern user experience.`
        // },
        { photo: 'plane.png', link: '', git: 'https://github.com/ZarrarPeshimam/Travel-Booking-site', t: 'Ticket Booking Office', skills: 'mySQL, HTML, CSS, JS, NodeJS',
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
