import React from 'react';
import { HashRouter as Router} from 'react-router-dom';


import MainSection from './menu/MainSection';



const LandingPage = () => {
  return (
      <div className="landing__main">
        <Router>
          <MainSection />
        </Router>
      </div>
  );
};



export default LandingPage; 
