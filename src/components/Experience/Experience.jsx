import React, { useRef, useState, useEffect } from 'react';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const exp_list = [
    {
      photo: 'reelcode.png', // Ensure you have this logo in your assets
      t: 'ReelCode', 
      role: 'SDE Intern',
      d: `Built a GitHub-based developer ranking system that expanded repository sampling by 90%. Designed complex scoring logic for objective developer assessment and developed the backend APIs for automated profiling.`, 
      time: 'Jan 2026 - Present' 
    },
    {
      photo: 'hacktoberfest.png', 
      t: 'Hacktoberfest 2025', 
      role: 'Open Source Contributor',
      d: `Achieved Super Contributor status with 6+ PRs. Integrated Gemini API for AI-powered weather conversations in 'SkyBuddy' and developed an automated StackOverflow answer summarizer for 'StackMate' using Google Gemini models.`, 
      time: 'Oct 2025' 
    },
    {
      photo: 'gssoc.png',
      t: 'GirlScript Summer of Code (GSSoC)',
      role: 'Open Source Contributor',
      d: `Worked on multiple MERN and Python repositories, fixing production issues, enhancing UI responsiveness, and improving frontend and backend logic.`,
      time: 'Aug-Sep 2025',
    },
    {
      photo: 'ssoc.png',
      t: 'Social Summer of Code (SSoC)',
      role: 'Open Source Contributor',
       d: `Contributed to MERN and Python-based open-source projects by resolving frontend bugs, optimizing reusable UI components, and improving API integrations.`,
      time: 'Jun-Aug 2025',
    },
    { 
      photo: 'spit.png', 
      t: 'Alumni Student Relation Cell', 
      role: 'Creative Team',
      d: `Designed posters & promotional content for alumni events. Wrote engaging posts and announcements.`, 
      time: '2024-Present' 
    },
    { 
      photo: 'acses.png', 
      t: 'Acses Committee SPIT', 
      role: 'Creative Subcom',
      d: `Created posters and promotional videos for college events. Managed event-related visual content.`, 
      time: '2023-24' 
    }
  ];

  // Check scroll position to toggle button visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 10);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='Exp-section'>
      <h2 className='Exp-header'>Experience Timeline</h2>
      
      <div className='Timeline-wrapper'>
        {/* Navigation Buttons */}
        {showLeft && (
          <button className="nav-btn left" onClick={() => scroll('left')}>
            <ChevronLeft size={24} />
          </button>
        )}
        {showRight && (
          <button className="nav-btn right" onClick={() => scroll('right')}>
            <ChevronRight size={24} />
          </button>
        )}

        {/* Line moved inside container to scroll with items if needed */}
        <div className='Timeline-container' ref={scrollRef}>
          <div className='Timeline-line'></div>
          {exp_list.map((e, index) => (
            <div key={index} className='Timeline-item'>
              <div className='Timeline-node'>
                <div className='Node-circle'></div>
                <span className='Node-date'>{e.time}</span>
              </div>

              <div className='Exp-card-modern'>
                <div className='Card-icon-wrapper'>
                   <img src={`/images/${e.photo}`} alt={e.t} className="Card-logo" />
                </div>
                <h3>{e.t}</h3>
                <div className='Card-meta'>
                   <span className='Card-role'><Briefcase size={14} /> {e.role}</span>
                </div>
                <p>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}