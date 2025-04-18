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
          <p>A Second year Computer Science student and a hardworking individual with curiosity of learning and exploring  new softwares and technology. 
            Eager to work on projects related to field of programming and learn from my mistakes. 
            Aspire to work on industry level projects and solving real world problems.
          </p>
          <p>Apart from being a Engineering student, I am also a <a className="hero-content-hobby" href="https://www.instagram.com/zarrar_quote/"
    target="_blank"
    rel="noopener noreferrer"
  >Part-time Content Creator</a>. 
          Creating poster-designs as a hobby, expressing my creativeity to the world.
          </p>
          <a href="/Resume_Zarrar.pdf" download className="btn">Download Resume
          <img src='/images/download.png' alt='download'></img></a>
        </div>
        <div className="profile-pic">
          <img src="/profile.jpeg" alt="profile_pic" />
          <p>Front-end Developer | ML Enthusiast | Competetive Programmer | Part-time Content Creator</p>
        </div>
      </div>
    </div>
  );
}
