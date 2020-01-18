import { ADD_REGION } from '../types';


export const addRegion = (region) => ({
  type: ADD_REGION,
  payload: {
    region: region,
  }
});



