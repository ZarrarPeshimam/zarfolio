import React from 'react'
import './Certificates.css'
import Cer_card from './Cer_card'
import Ach_card from './Ach_card'

export default function Certificates() {
  const cer_list=[
    { photo: 'devtown_pyai.jpg', t: 'Python and AI Bootcamp by Devtown' ,link:'https://www.cert.devtown.in/verify/1nKJvm'},
    { photo: 'devtown_web.jpg', t: 'WebDev Bootcamp by devtown' ,link:'https://www.cert.devtown.in/verify/ZmAwCP'},
    { photo: 'pec.jpg', t: 'Qualified for Round 2 of Coding Battle by Pragati Engineering College ', link:'https://unstop.com/certificate-preview/4c9ca68a-ebb0-4862-b2a6-d8f4fd08e093'},
    { photo: 'frontendhack.jpg', t: 'Participated in Odysee Frontend Hackathon by SPIT' ,link:''},
    { photo: 'ninja.jpg', t: 'Participated in 21-day Slayground 2.0 challenge by Coding Ninja' ,link:'https://ninjasfiles.s3.amazonaws.com/certificate_of_event_ninja_slayground_2_0_21_day_coding_challenge_331b227dbd38d78263fc.pdf'},
    { photo: 'codehousie.jpg', t: 'Participated in CodeHousie 2024 by CSI SPIT' ,link:''},
    { photo: 'flipkart6.jpg', t: 'Participated in Flipkart GRiD 6.0' ,link:'https://unstop.com/certificate-preview/e3a3cc16-44d2-46c2-b50c-92abf1a7987f'},
    { photo: 'devtownapprec.jpg', t: 'Certificate Of Appreciation by Devtown' ,link:'https://www.cert.devtown.in/verify/1nKJvm'},
  ];

  const ach_list=[
    { photo: '', t: 'Qualified for Code Uncode 2025 Regionals' ,link:''},
    { photo: '', t: 'Rank 1st in School (12th grade)' ,link:''}
  ]

  return (
    <div className='Cer-container'>
      <header>Certificates</header>
        <div className='cer-lister'>
          <ul>
              {cer_list.map((e,index)=>(
                  <Cer_card key={index} photo={`/images/cer/${e.photo}`} t={e.t} link={e.link}/>
              ))}
          </ul>
        </div>
        
        <header>Achievements</header>
        <div className='cer-lister'>
          <ul>
              {ach_list.map((e,index)=>(
                  <Ach_card key={index} t={e.t}/>
              ))}
          </ul>
        </div>
    </div>
  )
}
