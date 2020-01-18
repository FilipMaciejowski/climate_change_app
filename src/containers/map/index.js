import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import './style.scss';
import { addRegion } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from '../../redux/store';



const MapPage = () => {

  const dispatch = useDispatch();

  const { region } = useSelector(

    (store) => store.region,
  )

  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart addregion={(region)=>dispatch(addRegion(region))} setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};



export default MapPage;

