import React, { useEffect, useState } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import MainSection from './menu/MainSection';

const LandingPage = () => {
  const [switchValue, setSwitchValue] = useState(localStorage.getItem("view") === 'true');

  useEffect(() => {
    setMode();
  });

  const setMode = () => {
    const viewValue = localStorage.getItem("view") === 'true';
    if (viewValue !== null)  {
      setSwitchValue(viewValue);
    }
 };

  return (
    <div className={switchValue ? "landing__main-dark" : "landing__main"}>
      <Router>
        <MainSection switchValue={switchValue} setMode={setMode}/>
      </Router>
    </div>
  );
};



export default LandingPage; 
