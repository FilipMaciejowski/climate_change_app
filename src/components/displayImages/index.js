import React from 'react';

const DisplayImages = ({ locationArray }) => {
  return (
    <>
      {locationArray.map(image => {
          return(<img src={image} alt="img" key={image}/>)
        }
      )}
    </>
  )
};

export default DisplayImages;
