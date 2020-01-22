import React from "react";
import LeftSide from  '../menu/LeftSide';
import RightSide from '../menu/RightSide';
import { Blob } from "react-blob"; 

const MainSection = ({props}) => {
  return (
    <div className="main_section">
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
      <RightSide />
      <LeftSide />
    </div>
  );
};

export default MainSection;
