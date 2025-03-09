import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
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
