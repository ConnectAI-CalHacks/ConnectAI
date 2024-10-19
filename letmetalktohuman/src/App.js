import React, { useEffect } from 'react';
import './App.css';
import anime from 'animejs';

function App() {
  useEffect(() => {
    anime({
      targets: '.cta-button',
      translateY: [-10, 10], // Moves the button up and down
      direction: 'alternate', // Alternates the movement
      easing: 'easeInOutSine', // Smooth movement
      duration: 1000, // 1 second for the full movement
      loop: true // Continuously loops
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let Me Talk To a Human!</h1>
        <p>
          Tired of pressing endless numbers or talking to a robot? <br />
          <strong>Vapi Phone Connector</strong> gets you straight to a customer service agent without the hassle. Skip the automated responses and get human help, faster.
        </p>
        <button className="cta-button">Try Us</button>
      </header>
    </div>
  );
}

export default App;
