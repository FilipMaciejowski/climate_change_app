import React, { useEffect, useState } from 'react';
import { HashRouter as Router} from 'react-router-dom';


import MainSection from './menu/MainSection';



const LandingPage = () => {

  const [switchValue, setSwitchValue] = useState(localStorage.getItem("view"));

  useEffect(() => {
    setMode();
  });
 
 
  const setMode = () => {
  
    const viewValue = localStorage.getItem("view");
    if (viewValue !== null) 
      setSwitchValue(switchValue);
 }


  

  const darkMode = false;
  return (
    <div className={switchValue ? "landing__main" : "landing__main-dark"}>
      <Router>
        <MainSection switchValue={switchValue} setMode={setMode}/>
      </Router>
    </div>
  );
};



export default LandingPage; 
