import {
  ADD_COUNTRY,
  ADD_TEST,
  FETCH_INFO_ABOUT_COUNTRY,
  ADD_TEST_FULFILLED,
  ADD_TEST_PENDING,
  ADD_TEST_REJECTED
} from "../types";
import apiConst from '../../constans/api.constans';
import axios from 'axios';


export const addCountry = (shortName, countryName) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      currentCountryName: countryName,
      currentCountryShortcut: shortName
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
      `${apiConst.imagesApiUrl}${apiConst.imagesApiKey}&q=landscape+nature+${country}&image_type=photo`
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
