import React from 'react';
import { Carousel } from "antd";

const DisplayImages = ({ locationArray }) => {
  return (
      <Carousel autoplay={true} dotPosition="top" >
        {locationArray.map(image => {
          return (
            <div className="country__photo">
              <img src={image} alt="img" key={image} />
            </div>
          );
        })}
      </Carousel>
  );
};

export default DisplayImages;
