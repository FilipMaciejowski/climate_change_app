import React from 'react';
import { Menu, Icon } from "antd";
import { Button } from "antd";
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


const Navigation = () => {
  return (
    <div className="navigation_main">
      <Link to="/story">
        <Button type="danger" size="large" className="navigation_btn">
          story
        </Button>
      </Link>
      <Link to="/map">
        <Button type="danger" size="large" className="navigation_btn">
          map
        </Button>
      </Link>
    </div>
  );
}


  export default Navigation; 