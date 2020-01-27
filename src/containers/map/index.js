import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import './style.scss';
import { addCountry, fetchCountryData, fetchImages } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MapRender from "../../components/mapRender";
import CountryInfoModal from "../../components/countryInfoModal";

const MapPage = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState("");

  const { location, status, country } = useSelector(
    (state) => state.location
  );

  const openForm = (countryName, countryNameShorthand) => {
    dispatch(addCountry(countryNameShorthand, countryName));
    getImages(countryName);
    setFormOpen(true);
  };

  const closeModal = () => {
    setFormOpen(false);
  };

  const getImages = country => {
    dispatch(fetchImages(country));
  };

  const getDetails = () => {
    dispatch(fetchCountryData(country.currentCountryName));
  };

  const getImagesURL = () => {
    const arrayURL = [];
    location.data.hits.forEach((img, index) => {
      if(index <= 3){
        arrayURL.push(img.largeImageURL);
      }
    });
    return arrayURL;
  };
  const activeTab = () => '1';

  return (
      <div>
        <MapRender
          setTooltipContent={setContent}
          openForm={openForm}
        />
        <CountryInfoModal
          formOpen={formOpen}
          closeModal={closeModal}
          country={country}
          getImagesURL={getImagesURL}
          status={status}
          getDetails={getDetails}
          activeTab={activeTab}
        />
        <ReactTooltip>
          {content}
        </ReactTooltip>
      </div>
  );
};



export default MapPage;

