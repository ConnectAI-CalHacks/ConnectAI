import React from 'react';
import './OverviewStyles.css'; // Make sure to import the CSS file

const Overview = () => {
  return (
    
    <section className="container">
    <h1 className='title'>OVERVIEW</h1>
      <div className="overview">
      <h2 className="overview-title">About TalkTuahHuman AI</h2>
      <p className="overview-text">
        TalkTuahHuman AI revolutionizes the customer service experience by allowing users to skip 
        the traditional dial tone process. With our advanced voice assistant AI, you can directly 
        connect to a human agent in seconds, ensuring a smoother and more efficient interaction.
      </p>
      <p className="overview-text">
        Say goodbye to long waiting times and hello to instant assistance. Our app is designed 
        to enhance your customer service experience by providing immediate support when you need it most.
      </p>
      </div>
    </section>
  );
};

export default Overview;
