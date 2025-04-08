import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className='contact-container'>
            <h2>Contact Me</h2>
            <div className='contact-details'>
                <p><strong>Email: </strong>zarrar.peshimam23@spit.ac.in</p>
                <p><strong>Phone: </strong>+91 99201 01840</p>
                <p><strong>Location:</strong> Mumbai, Maharastra, India</p>
                <div className='social-links'>
                <p>Connect with me:</p>
                <a onClick={()=>window.open('https://www.linkedin.com/in/zarrar-peshimam-a2439b28b', '_blank')}>
                    <img src="/images/linkedin.png" alt="linkedin" />
                </a>
                <a onClick={()=>window.open('https://github.com/ZarrarPeshimam', '_blank')}>
                <img src="/images/github.png" alt="git" />
                </a>
            </div>
            </div>
            
        </div>
    );
}
