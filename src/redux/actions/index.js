import { ADD_REGION } from '../types';


export const addRegion = (shortName, regionName) => {
  return {
    type: ADD_REGION,
    payload: {
      currentRegionName: regionName,
      currentRegionShortcut: shortName
    }
  }
};
