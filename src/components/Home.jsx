import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="hero-container">
      {/*<h1 className="welcome-message">Welcome to My Portfolio</h1>*/}
      <h1 className="welcome-message"></h1>
      <div className="container">
        <div className="hero-content">
          <h1>Hi, <span className="highlight">Zarrar Peshimam</span> here</h1>
          <p>A 3rd year Computer Science student and a hardworking individual with curiosity of learning and exploring  new softwares and technology. 
            Eager to work on projects related to field of programming and learn from my mistakes. 
            Aspire to work on industry level projects and solving real world problems.
          </p>
          <a href="/Resume_Zarrar.pdf" download className="btn">Download Resume
          <img src='/images/download.png' alt='download'></img></a>
        </div>
        <div className="profile-pic">
          <img src="/profile.jpeg" alt="profile_pic" />
          <p>Mern Stack Developer | Open source contributer | ML Enthusiast | Competetive Programmer </p>
        </div>
      </div>
    </div>
  );
}
