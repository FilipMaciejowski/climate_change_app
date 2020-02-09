import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {
  addCountry,
  fetchClimateData,
  fetchCountryData,
  fetchImages,
  setTheme
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import MapRender from "../../components/mapRender";
import CountryInfoModal from "../../components/countryInfoModal";
import data from "../../constans/mapData";

const geoData = data;

const MapPage = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState("");
  const [countryNames, setCountryNames] = useState([]);
  const mapRef = useRef(); //  useRef() from react anables to fire a function from a child component at the parents level

  const { location, status, country, mode } = useSelector(
    state => state.location
  );

  useEffect(() => {
    setCountryNames(getCountryNames(geoData));
    setStartTheme();
  }, []);

  const setStartTheme = () => {
    const currentHour = new Date().getHours();
    if (mode === null) {
      if (currentHour < 8 || currentHour > 16) {
        dispatch(setTheme(true));
      } else {
        dispatch(setTheme(false));
      }
    }
  };

  const openForm = (countryName, countryNameShorthand, countryNameIso3) => {
    dispatch(addCountry(countryNameShorthand, countryName, countryNameIso3));
    getImages(countryName);
    setFormOpen(true);
  };

  const closeModal = () => {
    setFormOpen(false);
    mapRef.current.callResetData();
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
      if (index <= 3) {
        arrayURL.push(img.largeImageURL);
      }
    });
    return arrayURL;
  };

  const getCountryNames = mapData => {
    const namesArray = [];
    mapData.objects.ne_110m_admin_0_countries.geometries.forEach(
      countryData => {
        namesArray.push(countryData.properties.NAME);
      }
    );
    return namesArray;
  };

  return (
    <div className={mode ? "map__main-dark" : "map__main"}>
      <MapRender
        ref={mapRef}
        setTooltipContent={setContent}
        openForm={openForm}
        geoData={geoData}
        countryNames={countryNames}
        themeMode={mode}
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
          mode={mode}
        />
      )}
      <ReactTooltip>{content}</ReactTooltip>
      <Link to="/" className="map__home-btn-wrapper">
        {
          <svg
            viewBox="0 0 83 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="map__home-btn"
          >
            <path
              d="M42 11L19 32.357V37V67H65V37V32.357L42 11Z"
              fill="#E7ECED"
            />
            <path
              d="M49 67H35V44.937C35 43.867 35.867 43 36.937 43H47.063C48.133 43 49 43.867 49 44.937V67Z"
              fill="#6B5B4B"
            />
            <path d="M61 28.643V16H53V21.215L61 28.643Z" fill="#6C4127" />
            <path
              d="M14 37L42 11L70 37"
              stroke="#6B5B4B"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        }
      </Link>
    </div>
  );
};

export default MapPage;
