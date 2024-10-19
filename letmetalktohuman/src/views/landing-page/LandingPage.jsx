import React from 'react';
import './PageStyles.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ReactTyped as Typed } from 'react-typed';
import ProfilePic from './assets/output-onlinegiftools-ezgif.com-resize.gif';
import Overview from './overview/Overview'

const stringsToRender = [
  'Talk to a real service agent.',
  'Get past automated customer service.',
  'Save time.',
  'Talk to a Human FAST.',
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
    <>
    <div className="landing-container">
      

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

    <Overview></Overview>
    </>
  );
};

export default LandingPage;
