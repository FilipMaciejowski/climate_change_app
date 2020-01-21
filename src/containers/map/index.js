import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import './style.scss';
import { addRegion } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';




const MapPage = () => {

  const dispatch = useDispatch();

 useSelector(
    (store) => store.region,
  );

  const [content, setContent] = useState("");
  return (
      <div>
        <MapChart addRegion={(regionShortName, regionName) => dispatch(addRegion(regionShortName, regionName))} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
  );
};



export default MapPage;

