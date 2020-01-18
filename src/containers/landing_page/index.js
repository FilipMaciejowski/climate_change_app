import React from 'react';
import { HashRouter as Router, Link} from 'react-router-dom';
import Navigation from './menu/Navigation';
import AnimatedBackground from './menu/AnimatedBackground';




const LandingPage = () => {
  return (
      <div className="landing_main">
        <Router>
          <Navigation />
          <AnimatedBackground />
        </Router>
      </div>
  );
};



export default LandingPage; 
