import React from 'react';
import { Link } from 'react-router-dom'; 


const RightSide = () => {
  return (
    <aside className="right__side">
      <div className="right__side-content">
        <div className="right__side-text">
          <h1>Climate's</h1>
          <br />
          <h1>stethoscope</h1>
          <br />
          <p>Let's check us all up.</p>
          <p>For healthier future of our planet.</p>
        </div>
        <div className="right__side-buttons">
          <Link to="/story">
            <button href="#" className="right__side-btn1">
              story
            </button>
          </Link>
          <Link to="/map">
            <button href="#" className="right__side-btn2">
              map
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default RightSide;