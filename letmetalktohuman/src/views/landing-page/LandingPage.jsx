import React from 'react';
import './PageStyles.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ReactTyped as Typed } from 'react-typed';
import ProfilePic from './assets/output-onlinegiftools-ezgif.com-resize.gif';


const stringsToRender = [
  'Talk to a real service agent.',
  'Get past automated customer service.',
  'Save time.',
  '<strong>Talk to a Human.<!/strong>',
  ''

  
];

const LandingPage = () => {
  const handleClick = () => {
    console.log('Learn more button clicked!');
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="landing-container">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: '#0d47a1' }, // Blue background
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: 'bounce' },
            },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      <header className="landing-content">
       
        <h1 className="main_title">Automated customer service got you feeling robotic? <br></br> Let’s dial up a real person!</h1>
        <Typed className='main_title'
          strings={stringsToRender}
          typeSpeed={80}
          backSpeed={30}
          showCursor={true}
          onTypingDone = {30}
          loop
        />

        {/* Floating button */}
        
      </header>
      <button className="floating-button " onClick={handleClick}>
          Learn More
        </button>
    </div>
  );
};

export default LandingPage;
