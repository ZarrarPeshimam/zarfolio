import React from 'react'
import './Educard.css'
export default function Educard(procs) {
    const {photo,t,grade,d}=procs
  return (
    <div className='Edu-card-container'>
        <img src={photo} alt="icon" />
        <h1>{t}</h1>
        <p className='Edu-d'>{d}</p>
        <p className='Edu-g'>{grade}</p>
    </div> 
  )
}
