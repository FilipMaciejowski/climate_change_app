import React, {useEffect, useState} from "react";
import ReactTooltip from 'react-tooltip';
import { addCountry, fetchClimateData, fetchCountryData, fetchImages } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import MapRender from "../../components/mapRender";
import CountryInfoModal from "../../components/countryInfoModal";
import './style.scss';
import data from '../../constans/mapData'

const geoUrl = data;


const MapPage = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState("");
  const [countryNames, setCountryNames] = useState([]);

  const { location, status, country } = useSelector(
    (state) => state.location
  );

  useEffect(() => {
    setCountryNames(getCountryNames(geoUrl));
  }, []);

  const openForm = (countryName, countryNameShorthand, countryNameIso3) => {
    dispatch(addCountry(countryNameShorthand, countryName, countryNameIso3));
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
        {countryNames.length > 0 &&
          <MapRender
            setTooltipContent={setContent}
            openForm={openForm}
            geoUrl={geoUrl}
            countryNames={countryNames}
          />
        }
        {formOpen === true &&
          <CountryInfoModal
            formOpen={formOpen}
            closeModal={closeModal}
            country={country}
            getImagesURL={getImagesURL}
            status={status}
            getDetails={getDetails}
            getClimateData={getClimateData}
          />
        }
        <ReactTooltip>
          {content}
        </ReactTooltip>
      </div>
  );
};



export default MapPage;

