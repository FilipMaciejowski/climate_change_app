import React, {useEffect, useState} from "react";
import LeftSide from  '../menu/LeftSide';
import RightSide from '../menu/RightSide';
import { Switch } from "antd";

import { Blob } from "react-blob"; 

const MainSection = ({props, setMode, switchValue}) => {

  const [blobScale, setBlobScale] = useState(75);
  const [blobPositionTop, setBlobPositionTop] = useState(-20)
  const [blobPositionRight, setBlobPositionRight] = useState(-10);
  
  
  const darkChange = mode => {
    setMode(mode);
  };

  
  useEffect(() => {
    updateWidthMap();
    window.addEventListener("resize", updateWidthMap);
  });

  const updateWidthMap = () => {
    const width = window.innerWidth;
    if (width > 1800) {
      setBlobScale(82.5);
      setBlobPositionTop(-32.5);
      
    } else if (width < 1800 && width > 1650) {
      setBlobScale(77);
      setBlobPositionTop(-25);

    } else if (width < 1650 && width > 1450) {
      setBlobScale(70);
      setBlobPositionTop(-22.5);

    } else if (width < 1450 && width > 1250){
      setBlobScale(64);
      setBlobPositionTop(-20);
    } else if (width < 1250 && width > 1000){
      setBlobScale(54);
      setBlobPositionTop(-10);
    } else if (width < 1000 && width > 800){
      setBlobScale(47);
      setBlobPositionTop(-5);
      setBlobPositionRight(-11)
    } else if (width < 800 && width > 650){
      setBlobScale(43);
      setBlobPositionTop(-3);
      setBlobPositionRight(-15);
    } else if (width < 650 && width > 550){
      setBlobScale(41);
      setBlobPositionTop(-1);
      setBlobPositionRight(-21);
    }
  };


  const moonIcon = "🌙";
  const sunIcon = "🌞";
  
  return (
    <div className="main__section">
      <div className="blob">
        <Blob
          className="blob-1"
          size={`${blobScale}vh`}
          style={{
            position: "fixed",
            top: `${blobPositionTop}%`,
            right: `${blobPositionRight}%`,
            zIndex: 1,
            color: "white",
            opacity: 0.7,
            fontSize: "10vh"
          }}
          {...props}
        />
      </div>
      <RightSide switchValue={switchValue} />
      <LeftSide switchValue={switchValue} setMode={setMode} />
      <div className="switch__mode">
        <Switch
          defaultChecked={switchValue}
          onChange={mode => darkChange(mode)}
          checkedChildren={sunIcon}
          unCheckedChildren={moonIcon}
          size="large"
          className="switch"
        />
      </div>
    </div>
  );
};

export default MainSection;
