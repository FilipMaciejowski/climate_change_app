import React from "react";
import { Link } from "react-router-dom";


const RightSide = () => {
  return (
    <aside className="right__side">
      <div className="right__side-content">
        <div className="right__side-text">
          <svg viewBox="0 0 240 80" className="main__text-svg">
            <title>Climate's stethoscope</title>
            <text x="0" y="5" className="text-up">
                Climate´s
            </text>
            <text x="0" y="40" className="text-up">
              stethoscope
            </text>
            <text x="0" y="70" className="text-down">
              Let´s check us all up.
            </text>
            <text x="0" y="85" className="text-down">
              For healthier future of our planet.
            </text>
          </svg>

          {/*     <h1>Climate's</h1>
          <br />
          <h1>stethoscope</h1>
          <br />
          <p>Let's check us all up.</p>
          <p>For healthier future of our planet.</p> */}
        </div>
        {
          <div className="right__side-buttons">
            <Link className="right__side-btn1" to="/story">
              <span>story</span>
            </Link>
            <Link className="right__side-btn2" to="/map">
              <span>map</span>
            </Link>
          </div>
        }
      </div>
    </aside>
  );
};

export default RightSide;
