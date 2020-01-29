import React from 'react';
import { Carousel } from "antd";

const DisplayImages = ({ locationArray }) => {
  return (
      <Carousel autoplay={true} dotPosition="top" >
        {locationArray.map(image => {
          return (
            <div className="country__photo" key={image}>
              <img src={image} alt="img" />
            </div>
          );
        })}
      </Carousel>
  );
};

export default DisplayImages;
