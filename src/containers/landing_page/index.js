import React, { useEffect } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/actions';
import MainSection from './menu/MainSection';

const LandingPage = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state) => state.location
  );

  useEffect(() => {
    setStartTheme();
  });

  const setStartTheme = () => {
    const currentHour = new Date().getHours();
    if (mode === null) {
      if(currentHour < 8 || currentHour > 16 ) {
        dispatch(setTheme(true))
      } else {
        dispatch(setTheme(false))
      }
    }
  };

  const setMode = (newSwitchValue) => {
    dispatch(setTheme(newSwitchValue));
  };

  return (
    <div className={mode ? "landing__main-dark" : "landing__main"}>
      <Router>
        <MainSection switchValue={mode} setMode={setMode}/>
      </Router>
    </div>
  );
};



export default LandingPage; 
