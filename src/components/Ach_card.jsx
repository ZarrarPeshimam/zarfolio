import React, { useState } from 'react';
import './Ach_card.css';

export default function Ach_card(procs) {
    const {t} = procs;

    return (
        <div className='Ach-card-container'>
            <p>{t}</p>
        </div>
    );
}
