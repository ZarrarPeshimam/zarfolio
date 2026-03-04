import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const roles = [
    "Mern Stack Developer",
    "Open Source Contributor",
    "ML Enthusiast",
    "Competitive Programmer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setSpeed(50);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed, currentRoleIndex, roles]);

  return (
    <div className="hero-container">
      <h1 className="welcome-message"></h1>
      <div className="container">
        <div className="hero-content">
          <h1>Hi, <span className="highlight">Zarrar Peshimam</span> here</h1>
          <p>A 3rd year Computer Science student and a hardworking individual with curiosity of learning and exploring new softwares and technology. 
            Eager to work on projects related to field of programming and learn from my mistakes. 
            Aspire to work on industry level projects and solving real world problems.
          </p>
          <a href="/Resume_Zarrar.pdf" download className="btn">Download Resume
          <img src='/images/download.png' alt='download'></img></a>
        </div>
        <div className="profile-pic">
          <img src="/profile.jpeg" alt="profile_pic" />
          <div className="typing-container">
            <p className="profile-subtitle">
              {displayText}
              <span className="cursor">|</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}