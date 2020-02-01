import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { addCountry, fetchClimateData, fetchCountryData, fetchImages } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import MapRender from "../../components/mapRender";
import CountryInfoModal from "../../components/countryInfoModal";
import data from '../../constans/mapData'

const geoData = data;


const MapPage = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState("");
  const [countryNames, setCountryNames] = useState([]);
  const mapRef = useRef();
  const switchValue = localStorage.getItem("view") === 'true';

  const { location, status, country } = useSelector(
    (state) => state.location
  );

  useEffect(() => {
    setCountryNames(getCountryNames(geoData));
  }, []);

  const openForm = (countryName, countryNameShorthand, countryNameIso3) => {
    dispatch(addCountry(countryNameShorthand, countryName, countryNameIso3));
    getImages(countryName);
    setFormOpen(true);
  };

  const closeModal = () => {
    setFormOpen(false);
    mapRef.current.callResetData()
  };

  const getImages = country => {
    dispatch(fetchImages(country));
  };

  const getDetails = () => {
    dispatch(fetchCountryData(country.currentCountryName));
  };

  const getClimateData = () => {
    dispatch(fetchClimateData(country.currentCountryShortcutISO3));
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

  const getCountryNames = (mapData) => {
    const namesArray = [];
    mapData.objects.ne_110m_admin_0_countries.geometries.forEach(countryData => {
      namesArray.push(countryData.properties.NAME)
    });
    return namesArray;
  };

  return (
    <div className="map__main">
      
        <MapRender
          ref={mapRef}
          setTooltipContent={setContent}
          openForm={openForm}
          geoData={geoData}
          countryNames={countryNames}
          switchValue={switchValue}
        />
    
      {formOpen === true && (
        <CountryInfoModal
          formOpen={formOpen}
          closeModal={closeModal}
          country={country}
          getImagesURL={getImagesURL}
          status={status}
          getDetails={getDetails}
          getClimateData={getClimateData}
        />
      )}
      <ReactTooltip>{content}</ReactTooltip>
      <Link className="map__home-btn" to="/">
        <div className="home-btn">
          

        </div>
      </Link>
    </div>
  );
};



export default MapPage;

