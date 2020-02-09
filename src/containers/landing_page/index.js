import React, { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/actions";
import MainSection from "./menu/MainSection";

const LandingPage = () => {
  const [turnOnAnimation, setTurnOnAnimation] = useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector(state => state.location);

  useEffect(() => {
    setStartTheme();
  });

  const setStartTheme = () => {
    const currentHour = new Date().getHours();
    if (mode === null) {
      if (currentHour < 8 || currentHour > 18) {
        dispatch(setTheme(true));
      } else {
        dispatch(setTheme(false));
      }
    }
  };

  const setMode = newSwitchValue => {
    setTurnOnAnimation(true);
    dispatch(setTheme(newSwitchValue));
  };

  const setClass = () => {
    let className = "";
    if (turnOnAnimation) {
      if (mode) {
        className = "landing__main-dark";
      } else {
        className = "landing__main";
      }
    } else {
      if (mode) {
        className = "landing__main-dark-noAnim";
      } else {
        className = "landing__main-noAnim";
      }
    }
    return className;
  };

  return (
    <div>
      <div className={setClass()}>
        <Router>
          <MainSection switchValue={mode} setMode={setMode} />
        </Router>
      </div>
    </div>
  );
};

export default LandingPage;
