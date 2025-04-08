import React, { useState } from 'react';
import './Cer_card.css';

export default function Cer_card(procs) {
    const { photo, t, link } = procs;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='Cer-card-container' onClick={() => setShowDetails(!showDetails)}>
            <p>{t}</p>

            {showDetails && (
                <div className="details">
                    <img src={photo} alt="certificate" className="cert-image" />
                    {link !== '' && <button onClick={()=>window.open(link, '_blank')
                    }>Verify</button>}
                </div>
            )}
        </div>
    );
}
