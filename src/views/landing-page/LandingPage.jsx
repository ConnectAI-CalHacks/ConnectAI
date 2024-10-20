import React from 'react';
import './PageStyles.css';
import { ReactTyped as Typed } from 'react-typed';
import Overview from './overview/Overview'
import { useNavigate} from 'react-router-dom';

const stringsToRender = [
  'Talk to a real service agent.',
  'Get past automated customer service.',
  'Save time.',
  'Talk to a Human FAST.',
  ''

  
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Learn more button clicked!');
    navigate('/app');
  };

  

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <>
    <div className="landing-container">
      

      <header className="landing-content">
        <h1 className="title1">Letmetalktoahuman AI</h1>
        <h1 className="main_title">Tired of talking to machines? Let’s connect you to a real human!</h1>
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
          TRY IT YOURSELF!
        </button>
    </div>

    <Overview></Overview>
    </>
  );
};

export default LandingPage;
