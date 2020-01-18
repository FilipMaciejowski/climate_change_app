import React from 'react';
import { Blob } from 'react-blob';

const AnimatedBackground = ({props}) => {
  return (
    <div className="animated">
      {<Blob
        size="20vh"
        style={{
          position: "absolute",
          top: "70%",
          right: "50%",
          zIndex: 3,
          backgroundColor: "#21D4FD",
          color: "white",
          opacity: 0.8,
          fontSize: "5vh",
        
        }}
        {...props}
      />}
    </div>
  );
}

export default AnimatedBackground;


