import React from 'react'
import './SKcard.css'
export default function SKcard(procs) {
    const {photo,t}=procs
  return (
    <div className='SK-card-container'>
        <img src={photo} alt="icon" />
        <p>{t}</p>
    </div> 
  )
}
