import React, { useRef } from "react";
import { Carousel } from "antd";

const DisplayImages = ({ locationArray }) => {
  const slider = useRef();
  return (
    <Carousel
      nextArrow={{}}
      autoplay={true}
      dotPosition="top"
      ref={ref => {
        slider.current = ref;
      }}
    >
      {locationArray.map(image => {
        return (
          <div className="country__photo" key={image}>
            <img
              src={image}
              alt="img"
              onClick={() => slider.current.slick.slickNext()}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default DisplayImages;
