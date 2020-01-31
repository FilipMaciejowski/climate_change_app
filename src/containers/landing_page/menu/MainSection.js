import React from "react";
import LeftSide from  '../menu/LeftSide';
import RightSide from '../menu/RightSide';

import { Blob } from "react-blob"; 

const MainSection = ({props, setMode, switchValue}) => {
  
  return (
    <div className="main__section">
      <Blob
        className="blob-1"
        size="90vh"
        style={{
          position: "fixed",
          top: "-25%",
          right: "-10%",
          zIndex: 1,
          color: "white",
          opacity: 0.7,
          fontSize: "10vh"
        }}
        {...props}
      />
      <RightSide switchValue={switchValue} />
      <LeftSide switchValue={switchValue} setMode={setMode} />
    </div>
  );
};

export default MainSection;
