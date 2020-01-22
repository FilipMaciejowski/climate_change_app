import React from 'react';
import { Link } from 'react-router-dom'; 


const RightSide = () => {
  return (
    <aside className="right-side">
      
      <section>
        <h1>Climate's</h1> 
        <br/>
         <h1>stethoscope</h1>
         <br/>
         <p>Let's check us all up.</p><tr/>
         <p>For better future of our planet.</p>
        <div className="main_section-buttons">
          <Link to="/story">
            <button href="#" className="navigation_btn-1">
              story
            </button>
          </Link>
          <Link to="/map">
            <button href="#" className="navigation_btn-2">
              map
            </button>
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default RightSide;