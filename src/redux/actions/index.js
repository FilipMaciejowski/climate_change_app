import { ADD_COUNTRY } from '../types';
import ApiConst from '../../constans/api.constans';

export const addCountry = (shortName, countryName) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      currentRegionName: countryName,
      currentRegionShortcut: shortName
    }
  }
};

export const fetchImages = (country) => {

} 
