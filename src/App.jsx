import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="certificate"><Certificates /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
