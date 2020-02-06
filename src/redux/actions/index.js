import {
  ADD_COUNTRY,
  ADD_TEST,
  FETCH_INFO_ABOUT_COUNTRY,
  FETCH_CLIMATE_DATA,
  SET_MODE
} from "../types";
import apiConst from '../../constans/api.constans';
import axios from 'axios';


export const addCountry = (shortName, countryName, countryNameIso3) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      currentCountryName: countryName,
      currentCountryShortcut: shortName,
      currentCountryShortcutISO3: countryNameIso3
    }
  };
};


export const fetchImages = country => {

  // dispatch({type: ADD_TEST_PENDING})
  // axios.get(
  //     `${apiConst.imagesApiUrl}${apiConst.imagesApiKey}&q=landscape+nature+${country}&image_type=photo`
  //   )
  //   .then(res => {
  //     console.log(res);
  //     dispatch({ type: ADD_TEST_FULFILLED, payload: res });
  //   })
  //   .catch(err => {
  //     return {type: ADD_TEST_REJECTED, payload: err}
  //   })
  //   .finally(() => {});

  return {
    type: ADD_TEST,
    payload: axios.get(
      `${apiConst.imagesApiUrl}${apiConst.imagesApiKey}&q=landscape+nature+${country}&image_type=photo` // thanks to applyMiddleware we are able to put api request right into payload! 
    )
  };
};

export const fetchCountryData = country => {
  return {
    type: FETCH_INFO_ABOUT_COUNTRY,
    payload: axios.get(
      `${apiConst.infoAboutCountryApiUrl}${country}`
    )
  };
};

export const fetchClimateData = country => {
  return {
    type: FETCH_CLIMATE_DATA,
    payload: axios.get(
      `${apiConst.climateDataApiUrl}${country}`
    )
  };
};

export const setTheme = darkMode => {
  return {
    type: SET_MODE,
    payload: darkMode
  };
};
