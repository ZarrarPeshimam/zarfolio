import React from 'react';
import { GitPullRequest, ArrowRight } from 'lucide-react';
import './OpenSourceCallout.css';

export default function OpenSourceCallout({ href }) {
  return (
    <aside className='OSC-callout' aria-labelledby='OSC-title'>
      <div className='OSC-body'>
        <span className='OSC-icon' aria-hidden='true'>
          <GitPullRequest size={22} />
        </span>
        <div className='OSC-text'>
          <h3 id='OSC-title'>My Open Source Contributions</h3>
          <p>See what I've contributed to across GitHub, organized in one place.</p>
        </div>
      </div>

      <a
        className='OSC-link'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        View My ContriHub Profile
        <ArrowRight size={18} aria-hidden='true' />
      </a>
    </aside>
  );
}