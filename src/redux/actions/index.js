import {
  ADD_COUNTRY,
  ADD_TEST,
  ADD_TEST_FULLFILLED,
  ADD_TEST_PENDING,
  ADD_TEST_REJECTED
} from "../types";
import apiConst from '../../constans/api.constans';
import axios from 'axios';


export const addCountry = (shortName, countryName) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      currentRegionName: countryName,
      currentRegionShortcut: shortName
    }
  };
};

export const fetchImages = country => dispatch => {
  /* dispatch({type: ADD_TEST_PENDING})
  axios.get(
      `${apiConst.imagesApiUrl}${apiConst.imagesApiKey}&q=landscape+nature+${country}&image_type=photo`
    )
    .then(res => {
      return { type: ADD_TEST_FULLFILLED, payload: res };
    })
    .catch(err => {
      return {type: ADD_TEST_REJECTED, payload: err}
    })
    .finally(() => {}); */

  return {
    type: ADD_TEST,
    payload: axios.get(
      `${apiConst.imagesApiUrl}${apiConst.imagesApiKey}&q=landscape+nature+${country}&image_type=photo`
    )
  };
};
