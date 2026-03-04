import React, { useEffect, useRef } from 'react';
import './Cer_card.css';

export default function Cer_card({ photo, t, link, isOpen, onToggle }) {
    const cardRef = useRef(null);

    // This fixed the glitchy movement
    useEffect(() => {
        if (isOpen && cardRef.current) {
            // We use a slightly longer timeout (200ms) to allow the 
            // previous card to finish its closing animation first.
            const timer = setTimeout(() => {
                const offset = 100; // Adjust this if you have a fixed navbar
                const elementPosition = cardRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div className={`Cer-card-container ${isOpen ? 'active' : ''}`} onClick={onToggle}>
                <p>{t}</p>

            {isOpen && (
                <div className="details" onClick={(e) => e.stopPropagation()}>
                    <img src={photo} alt="certificate" className="cert-image" />
                    {link !== '' && <button onClick={()=>window.open(link, '_blank')
                    }>Verify</button>}
                </div>
            )}
        </div>
    );
}