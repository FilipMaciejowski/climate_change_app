import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import './style.scss';
import { addCountry, fetchImages } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';




const MapPage = () => {

  const dispatch = useDispatch();

 useSelector(
    (store) => store.country,
  );

  const [content, setContent] = useState("");
  return (
      <div>
        <MapChart
          addCountry={(countryShortName, countryName) => dispatch(addCountry(countryShortName, countryName))} 
          setTooltipContent={setContent} 
          fetchImages={(countryName) => dispatch(fetchImages(countryName))} 
        />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
  );
};



export default MapPage;

